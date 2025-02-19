import { Button, Group, SimpleGrid, Stack, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useBlogApis } from "../../../hooks/apis/blog";
import { toast } from "react-toastify";

export default function PostsPage() {
  const { listBlogs, toggleVisible } = useBlogApis();

  const listBlogsQuery = useQuery({
    queryKey: ["listBlogsQuery"],
    queryFn: listBlogs,
    initialData: [],
  });

  const toggleVisibleMutation = useMutation({
    mutationKey: ["toggleVisible"],
    mutationFn: toggleVisible,
  });
  const onToggleVisible = (blogId: string) => {
    toast.promise(toggleVisibleMutation.mutateAsync(blogId), {
      pending: "Updating...",
      success: {
        render: () => {
          listBlogsQuery.refetch();
          return "Success!";
        },
      },
      error: {
        render: ({ data }) => {
          if (data instanceof Error) return data.message;
          return "Failed!";
        },
      },
    });
  };

  const onDelete = (blogId: string) => {};

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
          <PostCard key={index} blog={blog} onToggleVisible={onToggleVisible} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
