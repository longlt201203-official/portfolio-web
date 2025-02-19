import { Button, Group, SimpleGrid, Stack, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BlogResponse, useBlogApis } from "../../../hooks/apis/blog";
import { toast } from "react-toastify";
import DeleteBlogModal from "./DeleteBlogModal";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

export default function PostsPage() {
  const { listBlogs, toggleVisible, deleteBlogById } = useBlogApis();

  const listBlogsQuery = useQuery({
    queryKey: ["listBlogsQuery"],
    queryFn: listBlogs,
    initialData: [],
  });

  const toggleVisibleMutation = useMutation({
    mutationKey: ["toggleVisible"],
    mutationFn: toggleVisible,
    onSuccess: () => {
      listBlogsQuery.refetch();
    },
  });
  const onToggleVisible = (blog: BlogResponse) => {
    toast.promise(toggleVisibleMutation.mutateAsync(blog.id), {
      pending: "Updating...",
      success: "Success!",
      error: {
        render: ({ data }) => {
          if (data instanceof Error) return data.message;
          return "Failed!";
        },
      },
    });
  };

  const [deleteModalOpened, deleteModalControls] = useDisclosure();
  const [deletingBlog, setDeletingBlog] = useState<BlogResponse>();
  const deleteBlogMutation = useMutation({
    mutationKey: ["deleteBlog"],
    mutationFn: deleteBlogById,
    onSuccess: () => {
      listBlogsQuery.refetch();
      deleteModalControls.close();
      toast.success("Success!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const showDeleteConfirmDialog = (blog: BlogResponse) => {
    setDeletingBlog(blog);
    deleteModalControls.open();
  };

  const onDelete = (blog?: BlogResponse) => {
    if (!blog) return;
    deleteBlogMutation.mutate(blog.id);
  };

  return (
    <>
      <DeleteBlogModal
        opened={deleteModalOpened}
        onClose={deleteModalControls.close}
        blog={deletingBlog}
        onConfirm={onDelete}
        loading={deleteBlogMutation.isPending}
      />
      <Stack>
        <Title>Posts</Title>
        <Group>
          <Button component={Link} to="write">
            New Post
          </Button>
        </Group>
        <SimpleGrid cols={{ base: 2, lg: 3, xl: 4 }}>
          {listBlogsQuery.data.map((blog, index) => (
            <PostCard
              key={index}
              blog={blog}
              onToggleVisible={onToggleVisible}
              onDelete={showDeleteConfirmDialog}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
}
