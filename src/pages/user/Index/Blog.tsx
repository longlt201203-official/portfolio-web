import { Container, Stack, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import BlogCard from "../../../components/BlogCard";
import { BlogResponse } from "../../../hooks/apis/blog";

export interface BlogSectionProps {
  blogs?: BlogResponse[];
}

export default function Blog({ blogs }: BlogSectionProps) {
  return (
    <Container mih="30vh" size="xl">
      <Stack gap="xl" justify="center" align="center">
        <Title className="text-center">My Blog</Title>
        <Carousel
          w="100%"
          slideSize={{ base: "100%", md: "60%" }}
          slideGap="md"
          controlsOffset="md"
          controlSize={24}
          loop
          align="center"
          styles={{
            control: {
              backgroundColor: "#f9f0f2",
            },
          }}
        >
          {blogs?.map((item, index) => (
            <Carousel.Slide key={index}>
              <BlogCard key={index} variant="landing" blog={item} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Stack>
    </Container>
  );
}
