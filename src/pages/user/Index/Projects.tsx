import { Button, Container, SimpleGrid, Stack } from "@mantine/core"; // Changed import
import ProjectItem from "./ProjectItem";
import GitHubIcon from "../../../components/icons/GitHubIcon";
import { ProjectResponse } from "../../../hooks/apis/projects";
// Removed Carousel import

export interface ProjectsProps {
  projects?: ProjectResponse[]
}

export default function Projects({ projects }: ProjectsProps) {

  return (
    <Container size="lg">
      <Stack align="center" justify="center" gap="xl">
        {/* Replace Carousel with SimpleGrid */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }} // Responsive columns
          spacing="xl" // Spacing between grid items
          verticalSpacing="xl"
          w="100%"
        >
          {projects?.map((item, index) => (
            // Render ProjectItem directly in the grid
            <ProjectItem key={index} project={item} />
          ))}
        </SimpleGrid>

        <Button
          rightSection={<GitHubIcon size={24} fill="white" />}
          size="lg"
          component="a"
          href="https://github.com/longlt201203" // Make sure this link is correct
          target="_blank"
          mt="xl" // Add some margin top
        >
          More on GitHub
        </Button>
      </Stack>
    </Container>
  );
}
