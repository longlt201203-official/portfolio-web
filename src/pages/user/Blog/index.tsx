import { Container, Stack } from "@mantine/core";
import BlogCard from "../../../components/BlogCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useFrontApis } from "../../../hooks/apis/front";
import PageLoading from "../../../components/PageLoading";

export default function BlogPage() {
  const { listBlogs } = useFrontApis();

  const listBlogsQuery = useInfiniteQuery({
    queryKey: ["listBlogs"],
    queryFn: async ({ pageParam }) =>
      await listBlogs({ page: pageParam, take: 10 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.pagination?.nextPage,
  });

  return (
    <>
      {/* <Container size="sm" py="xl">
        <Stack gap="xl">
          {listBlogsQuery.data?.pages.map((page) =>
            page.data.map((item) => <BlogCard key={item.id} blog={item} />)
          )}
        </Stack>
      </Container> */}
      <PageLoading />
    </>
  );
}
