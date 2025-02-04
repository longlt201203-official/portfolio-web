import { Button, Container, Group, Stack, Title } from "@mantine/core";
import ProjectItem from "./ProjectItem";
import GitHubIcon from "../../components/GitHubIcon";

export default function Projects() {
  return (
    <Container mih="100vh" size="lg">
      <Stack align="center" justify="center" gap="xl">
        <Title className="text-center">My Projects</Title>
        <Group gap="lg" justify="center">
          {Array.from({ length: 5 }).map((_, index) => (
            <ProjectItem key={index} />
          ))}
        </Group>
        <Button rightSection={<GitHubIcon size={24} fill="white" />}>
          More on GitHub
        </Button>
      </Stack>
    </Container>
  );
}
