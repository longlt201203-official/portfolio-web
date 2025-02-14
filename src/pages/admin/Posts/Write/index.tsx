import {
  Button,
  Divider,
  Group,
  ScrollArea,
  SimpleGrid,
  Space,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import MyMarkdown from "../../../../components/MyMarkdown";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";

const loadMdTemplate = async () => {
  const response = await fetch("/template.md");
  return await response.text();
};

export default function WritePostPage() {
  const { postId } = useParams();

  const [postTitle, setPostTitle] = useState("");
  const [mdText, setMdText] = useState("");

  return (
    <Stack className="h-full" gap="xs">
      <Group gap="xs">
        <TextInput
          placeholder="Enter Post Title"
          w={360}
          fw="semibold"
          onChange={(e) => {
            setPostTitle(e.target.value);
          }}
        />
        <Button>Save</Button>
        <Button
          variant="outline"
          onClick={() =>
            loadMdTemplate().then((v) => setMdText(v + "\n\n" + mdText))
          }
        >
          Load Template
        </Button>
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
  );
}
