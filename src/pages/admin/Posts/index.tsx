import { Button, Group, SimpleGrid, Stack, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";
import { useQuery } from "@tanstack/react-query";
import { useBlogApis } from "../../../hooks/apis/blog";

export default function PostsPage() {
  const { listBlogs } = useBlogApis();

  const listBlogsQuery = useQuery({
    queryKey: ["listBlogsQuery"],
    queryFn: listBlogs,
    initialData: [],
  });

  return (
    <Stack>
      <Title>Posts</Title>
      <Group>
        <Button component={Link} to="write">
          New Post
        </Button>
      </Group>
      <SimpleGrid cols={{ base: 2, lg: 3, xl: 4 }}>
        {listBlogsQuery.data.map((blog, index) => (
          <PostCard key={index} blog={blog} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
