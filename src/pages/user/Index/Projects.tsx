import { Button, Container, Stack, Title } from "@mantine/core";
import ProjectItem from "./ProjectItem";
import GitHubIcon from "../../../components/icons/GitHubIcon";
import { Carousel } from "@mantine/carousel";

export default function Projects() {
  return (
    <Container h="100vh" size="lg" className="overflow-auto">
      <Stack align="center" justify="center" gap="xl">
        <Title className="text-center">My Projects</Title>
        <Carousel
          w="100%"
          slideSize={{
            base: "100%",
            md: "60%",
          }}
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
              <ProjectItem />
            </Carousel.Slide>
          ))}
        </Carousel>
        <Button rightSection={<GitHubIcon size={24} fill="white" />}>
          More on GitHub
        </Button>
      </Stack>
    </Container>
  );
}
