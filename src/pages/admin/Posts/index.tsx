import { Button, Group, SimpleGrid, Stack, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

export default function PostsPage() {
  return (
    <Stack>
      <Title>Posts</Title>
      <Group>
        <Button component={Link} to="create">
          New Post
        </Button>
      </Group>
      <SimpleGrid cols={{ base: 2, lg: 3, xl: 4 }}>
        {Array.from({ length: 10 }).map((_, index) => (
          <PostCard key={index} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
