import { Container, List, Stack, Text, Timeline, Title } from "@mantine/core";

const content = [
  {
    title: "2021",
    description: "Gratuated from High School",
    content: ["Do something", "Do something", "Do something"],
  },
  {
    title: "04/2022",
    description: "Back-End Developer at Papagroup Technology",
    content: ["Do something", "Do something", "Do something"],
  },
  {
    title: "12/2023",
    description: "Back-End Developer at Nexon Dev Vina",
    content: ["Do something", "Do something", "Do something"],
  },
  {
    title: "Now",
    description: "",
    content: [],
  },
];

export default function TimelineSection() {
  return (
    <Container fluid mih="100vh">
      <Stack justify="center" align="center" gap="xl">
        <Title className="text-center">My Timeline</Title>
        <Timeline active={3}>
          {content.map((item, index) => (
            <Timeline.Item key={index} title={item.title} mih={150}>
              <Text>{item.description}</Text>
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
