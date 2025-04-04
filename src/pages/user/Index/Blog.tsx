import { Button, Container, Grid, Group, Stack } from "@mantine/core";
import { BlogResponse } from "../../../hooks/apis/blog";
import BlogCard from "../../../components/BlogCard";
import { Link } from "react-router-dom";

interface BlogProps {
  blogs?: BlogResponse[];
}

export default function Blog({ blogs = [] }: BlogProps) {
  // Display only the latest 3 blogs
  const latestBlogs = blogs?.slice(0, 3) || [];

  return (
    <Container size="lg">
      <Stack gap="xl">
        <Grid gutter="xl">
          {latestBlogs.map((blog) => (
            <Grid.Col key={blog.id} span={{ base: 12, md: 4 }}>
              <BlogCard blog={blog} />
            </Grid.Col>
          ))}
        </Grid>
        
        <Group justify="center" mt="md">
          <Button 
            component={Link} 
            to="/blog"
            size="lg"
            variant="outline"
          >
            View All Articles
          </Button>
        </Group>
      </Stack>
    </Container>
  );
}