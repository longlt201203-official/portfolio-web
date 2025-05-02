import { Button, Container, Stack } from "@mantine/core";
import ProjectItem from "./ProjectItem";
import GitHubIcon from "../../../components/icons/GitHubIcon";
import { Carousel } from "@mantine/carousel";

export default function Projects() {
  return (
    <Container size="lg">
      <Stack align="center" justify="center" gap="xl">
        <Carousel
          w="100%"
          slideSize={{
            base: "100%",
            sm: "80%",
            md: "60%",
          }}
          slideGap="md"
          controlsOffset="md"
          controlSize={24}
          loop
          align="center"
          withIndicators
          styles={{
            control: {
              backgroundColor: "#f9f0f2",
            },
            indicators: {
              bottom: -40,
            },
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Carousel.Slide key={index}>
              <ProjectItem />
            </Carousel.Slide>
          ))}
        </Carousel>
        <Button
          rightSection={<GitHubIcon size={24} fill="white" />}
          size="lg"
          component="a"
          href="https://github.com/longlt201203"
          target="_blank"
        >
          More on GitHub
        </Button>
      </Stack>
    </Container>
  );
}
