import {
  Button,
  Divider,
  Group,
  Loader,
  MultiSelect,
  ScrollArea,
  Select,
  SimpleGrid,
  Space,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import MyMarkdown from "../../../../components/MyMarkdown";
import dayjs from "dayjs";
import {
  AiSuggestRequest,
  CreateBlogRequest,
  UpdateBlogRequest,
  useBlogApis,
} from "../../../../hooks/apis/blog";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const loadMdTemplate = async () => {
  const response = await fetch("/template.md");
  return await response.text();
};

export default function WritePostPage() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { getBlogById, createBlog, updateBlogById, aiSuggest } = useBlogApis();

  const getBlogByIdQuery = useQuery({
    queryKey: ["getBlogById", postId],
    queryFn: async ({ queryKey }) => {
      if (!queryKey[1]) return;
      return getBlogById(queryKey[1]);
    },
    retry: 0,
  });
  const blog = getBlogByIdQuery.data;

  const [model, setModel] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [mdText, setMdText] = useState("");
  const [suggestionFields, setSuggestionFields] = useState<string[]>([])

  useEffect(() => {
    if (!getBlogByIdQuery.isLoading && blog) {
      setPostTitle(blog.title);
      setShortDescription(blog.shortDescription);
      setMdText(blog.content!);
    }
  }, [blog]);

  const updateOrCreateBlogMutation = useMutation({
    mutationKey: ["updateOrCreateBlog"],
    mutationFn: async () => {
      if (!blog) {
        const dto: CreateBlogRequest = {
          title: postTitle,
          shortDescription: shortDescription,
          content: mdText,
          categories: [],
          language: "en",
        };
        await createBlog(dto);
      } else {
        const dto: UpdateBlogRequest = {
          title: postTitle,
          shortDescription: shortDescription,
          content: mdText,
          categories: [],
          language: "en",
        };
        await updateBlogById(blog.id, dto);
      }
    },
    onSuccess: () => {
      toast.success("Success!");
      navigate("/admin/posts");
    },
  });

  const aiSuggestMutation = useMutation({
    mutationKey: ["aiSuggest"],
    mutationFn: async () => {
      const aiSuggestDto: AiSuggestRequest = {
        params: {
          title: postTitle || undefined,
          content: mdText || undefined,
          language: "en",
          categories: [],
          shortDescription: shortDescription || undefined
        },
        suggestRequestFields: suggestionFields
      }

      return await aiSuggest(model, aiSuggestDto);
    },
    onSuccess: (data) => {
      console.log(data)

      if (data.title) {
        setPostTitle(data.title)
      }

      if (data.shortDescription) {
        setShortDescription(data.shortDescription)
      }

      if (data.content) {
        setMdText(data.content);
      }
    }
  })

  const isLoading =
    getBlogByIdQuery.isLoading || updateOrCreateBlogMutation.isPending || aiSuggestMutation.isPending;

  return (
    <>
      <Stack className="h-full" gap="xs">
        <Stack>
          <Group gap="xs">
            <Select placeholder="Select model" data={["gpt-4", "gemini-2.0-flash"]} value={model} onChange={(v) => setModel(v || "gpt-4")} disabled={isLoading} />
            
            <MultiSelect
              placeholder="Select fields to suggest"
              data={[
                { label: "Title", value: "title" }, 
                { label: "Short Description", value: "shortDescription" }, 
                { label: "Content", value: "content" }
              ]}
              value={suggestionFields}
              onChange={(value) => setSuggestionFields(value)}
              disabled={isLoading} />

            <Button onClick={() => aiSuggestMutation.mutate()} disabled={isLoading}>Suggest</Button>
          </Group>

          <Group gap="xs" align="end">
            <Stack gap="xs" w={360}>
              <TextInput
                placeholder="Enter Post Title"
                w="100%"
                value={postTitle}
                onChange={(e) => {
                  setPostTitle(e.target.value);
                }}
                disabled={isLoading}
              />
              <TextInput
                placeholder="Enter Short Description"
                w="100%"
                value={shortDescription}
                onChange={(e) => {
                  setShortDescription(e.target.value);
                }}
                disabled={isLoading}
              />
            </Stack>
            <Button
              onClick={() => {
                updateOrCreateBlogMutation.mutate();
              }}
              disabled={isLoading}
            >
              Save
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                loadMdTemplate().then((v) => setMdText(v + "\n\n" + mdText))
              }
              disabled={isLoading}
            >
              Load Template
            </Button>

          </Group>
        </Stack>
        <Loader size="sm" display={isLoading ? "block" : "none"} />
        <Divider />
        <SimpleGrid cols={2} className="h-full" spacing="xs">
          <Editor
            defaultLanguage="markdown"
            value={mdText}
            onChange={(v) => setMdText(v || "")}
          />
          <ScrollArea>
            <Title c="tawnyPort">{postTitle || "Enter Post Title"}</Title>
            <Text c="dimmed" size="sm">
              Last Updated: {dayjs().format("DD-MM-YYYY HH:mm")}
            </Text>
            <Space h="xl" />
            <Stack>
              <MyMarkdown content={mdText} />
            </Stack>
          </ScrollArea>
        </SimpleGrid>
      </Stack>
    </>
  );
}
