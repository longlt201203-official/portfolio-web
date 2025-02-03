import { Container, SimpleGrid, Stack, Title } from "@mantine/core";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <Stack align="center" gap="xl">
      <Title>My Projects</Title>
      <Container size="xl">
        <SimpleGrid cols={3}>
          {Array.from({ length: 5 }).map((_, index) => (
            <ProjectItem key={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Stack>
  );
}
