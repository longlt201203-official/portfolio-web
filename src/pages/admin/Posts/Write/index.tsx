import {
  Button,
  Divider,
  Group,
  Loader,
  ScrollArea,
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
import hljs from "highlight.js";
import {
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
  const { getBlogById, createBlog, updateBlogById } = useBlogApis();

  const getBlogByIdQuery = useQuery({
    queryKey: ["getBlogById", postId],
    queryFn: async ({ queryKey }) => {
      if (!queryKey[1]) return;
      return getBlogById(queryKey[1]);
    },
    retry: 0,
  });
  const blog = getBlogByIdQuery.data;

  const [postTitle, setPostTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [mdText, setMdText] = useState("");

  useEffect(() => {
    if (!getBlogByIdQuery.isLoading && blog) {
      setPostTitle(blog.title);
      setShortDescription(blog.shortDescription);
      setMdText(blog.content!);
    }
  }, [blog]);

  useEffect(() => {
    hljs.highlightAll();
  }, [mdText]);

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

  const isLoading =
    getBlogByIdQuery.isLoading || updateOrCreateBlogMutation.isPending;

  return (
    <>
      <Stack className="h-full" gap="xs">
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
          <Loader size="sm" display={isLoading ? "block" : "none"} />
        </Group>
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
