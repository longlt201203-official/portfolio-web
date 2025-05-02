import { Card, Spoiler, Text, Title, Group, Button } from "@mantine/core"; // Added Image, Group, Badge, Button

export default function ProjectItem() {
  // Example data - replace with actual props later
  const project = {
    name: "Awesome Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu nisl, consequat sed pretium ac, fringilla id nunc. Nunc cursus est est, vitae mattis sem maximus bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    imageUrl: "https://via.placeholder.com/400x200", // Placeholder image URL
    tags: ["React", "Mantine", "TypeScript"],
    liveUrl: "#",
    repoUrl: "#",
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
      <Title order={3} mt="md" mb="xs">{project.name}</Title>

      <Spoiler maxHeight={80} showLabel="Show more" hideLabel="Hide">
         <Text size="sm" c="dimmed" mb="md">
           {project.description}
         </Text>
      </Spoiler>

      <Group mt="auto"> {/* Pushes buttons to the bottom */}
        <Button variant="outline" component="a" href={project.repoUrl} target="_blank" fullWidth>
          Source Code
        </Button>
      </Group>
    </Card>
  );
}
