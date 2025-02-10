import { Container, Stack } from "@mantine/core";
import BlogCard from "../../../components/BlogCard";

export default function BlogPage() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="xl">
        {Array.from({ length: 10 }).map((_, index) => (
          <BlogCard key={index} />
        ))}
      </Stack>
    </Container>
  );
}
