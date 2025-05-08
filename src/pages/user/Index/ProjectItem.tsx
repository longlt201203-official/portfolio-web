import { Card, Spoiler, Text, Title, Group, Button } from "@mantine/core"; // Added Image, Group, Badge, Button
import { ProjectResponse } from "../../../hooks/apis/projects";

export interface ProjectItemProps {
  project: ProjectResponse;
}

export default function ProjectItem({ project }: ProjectItemProps) {

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
      <Title order={3} mt="md" mb="xs">{project.name}</Title>

      <Spoiler maxHeight={80} showLabel="Show more" hideLabel="Hide">
         <Text size="sm" c="dimmed" mb="md">
           {project.description}
         </Text>
      </Spoiler>

      <Group mt="auto"> {/* Pushes buttons to the bottom */}
        <Button variant="outline" component="a" href={project.projectLink} target="_blank" fullWidth>
          Source Code
        </Button>
      </Group>
    </Card>
  );
}
