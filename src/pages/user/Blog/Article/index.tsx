import { Button, Container, Space, Stack, Text, Title } from "@mantine/core";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import MyMarkdown from "../../../../components/MyMarkdown";
import hljs from "highlight.js";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useFrontApis } from "../../../../hooks/apis/front";
import dayjs from "dayjs";
import PageLoading from "../../../../components/PageLoading";

export default function ArticlePage() {
  const { viewBlog } = useFrontApis();

  const { blogId } = useParams();
  const viewBlogQuery = useQuery({
    queryKey: ["viewBlog"],
    queryFn: () => {
      if (!blogId) return;
      return viewBlog({ blogId: blogId });
    },
  });
  const blog = viewBlogQuery.data;

  useEffect(() => {
    hljs.highlightAll();
  }, [blog]);

  return viewBlogQuery.isLoading ? (
    <PageLoading />
  ) : (
    <Container py="xl">
      <Button
        variant="white"
        leftSection={<ArrowLeftIcon className="h-3 w-3 text-primary-6" />}
        component="a"
        href="/blog"
      >
        Back
      </Button>
      <Title c="tawnyPort">{blog?.title}</Title>
      <Text c="dimmed" size="sm">
        Last Updated: {dayjs(blog?.updatedAt).format("DD/MM/YYYY HH:mm:ss")}
      </Text>
      <Space h="xl" />
      <Stack>
        <MyMarkdown content={blog?.content} />
      </Stack>
    </Container>
  );
}
