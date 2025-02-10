import {
  Card,
  Container,
  Image,
  Overlay,
  ScrollArea,
  Spoiler,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import BlogCard from "../../../components/BlogCard";

export default function Blog() {
  return (
    <Container mih="100vh" size="xl">
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
          {Array.from({ length: 5 }).map((_, index) => (
            <Carousel.Slide key={index}>
              <BlogCard key={index} variant="landing" />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Stack>
    </Container>
  );
}
