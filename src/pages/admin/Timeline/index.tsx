import { Button, Group, SimpleGrid, Stack, Title } from "@mantine/core";
import TimelineCard from "./TimelineCard";

export default function TimelinePage() {
  return (
    <Stack>
      <Title>Timeline</Title>
      <Group>
        <Button>Add</Button>
      </Group>
      <SimpleGrid cols={{ base: 2, lg: 3, xl: 4 }}>
        <TimelineCard />
      </SimpleGrid>
    </Stack>
  );
}
