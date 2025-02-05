import { Button, Container, Space, Stack, Text, Title } from "@mantine/core";
import BlogLayout from "../layout";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import MyMarkdown from "../../../components/MyMarkdown";
import hljs from "highlight.js";
import { useEffect, useState } from "react";

export default function ArticlePage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch("/test.md");
      const text = await response.text();
      setContent(text);
    };

    fetchContent();
  }, []);

  useEffect(() => {
    hljs.highlightAll();
  }, [content]);

  return (
    <BlogLayout>
      <Container py="xl">
        <Button
          variant="white"
          leftSection={<ArrowLeftIcon className="h-3 w-3 text-primary-6" />}
        >
          Back
        </Button>
        <Title c="tawnyPort">Article Title</Title>
        <Text c="dimmed" size="sm">
          Last Updated: 20-12-2003 16:10
        </Text>
        <Space h="xl" />
        <Stack>
          <MyMarkdown content={content} />
        </Stack>
      </Container>
    </BlogLayout>
  );
}
