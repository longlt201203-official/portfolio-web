import { Button, Container, SimpleGrid, Stack } from "@mantine/core"; // Changed import
import ProjectItem from "./ProjectItem";
import GitHubIcon from "../../../components/icons/GitHubIcon";
// Removed Carousel import

export default function Projects() {
  // Assuming you'll fetch project data later
  const projects = Array.from({ length: 3 }); // Example: 3 projects

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
          {projects.map((_, index) => (
            // Render ProjectItem directly in the grid
            <ProjectItem key={index} />
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
