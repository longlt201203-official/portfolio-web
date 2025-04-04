import { Container, List, Stack, Timeline, Title } from "@mantine/core";
import { TimelineResponse } from "../../../hooks/apis/timeline";

interface TimelineSectionProps {
  timelines?: TimelineResponse[];
}

export default function TimelineSection({ timelines = [] }: TimelineSectionProps) {
  // Sort timelines by sort order
  const sortedTimelines = [...(timelines || [])].sort((a, b) => a.sort - b.sort);

  return (
    <Container fluid>
      <Stack justify="center" align="center" gap="xl">
        <Timeline active={sortedTimelines.length > 0 ? sortedTimelines.length - 1 : 0} bulletSize={24} lineWidth={2}>
          {sortedTimelines.map((item) => (
            <Timeline.Item 
              key={item.id} 
              title={item.time} 
              mih={150}
            >
              <Title order={4}>{item.title}</Title>
              <List c="dimmed" size="sm" className="list-disc">
                {item.content.map((contentItem, contentIndex) => (
                  <List.Item key={contentIndex}>{contentItem}</List.Item>
                ))}
              </List>
            </Timeline.Item>
          ))}
        </Timeline>
      </Stack>
    </Container>
  );
}