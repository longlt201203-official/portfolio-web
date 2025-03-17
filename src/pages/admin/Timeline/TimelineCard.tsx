import {
  EllipsisHorizontalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  ActionIcon,
  Card,
  Group,
  List,
  Menu,
  Stack,
  Title,
} from "@mantine/core";

const timeline = {
  time: "01/2024",
  title: "ABC XYZ at DEF",
  content: [
    "content line 1",
    "content line 2",
    "content line 3",
    "content line 4",
  ],
};

export default function TimelineCard() {
  return (
    <Card shadow="md">
      <Stack>
        <Group justify="space-between">
          <Title order={5}>{timeline.time}</Title>
          <Menu>
            <Menu.Target>
              <ActionIcon variant="white" size="xl">
                <EllipsisHorizontalIcon className="h-6 w-6" />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item leftSection={<PencilSquareIcon className="h-4 w-4" />}>
                Edit
              </Menu.Item>
              <Menu.Item leftSection={<TrashIcon className="h-4 w-4" />}>
                Delete
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>

        <Title order={3}>{timeline.title}</Title>
        <List className="list-disc">
          {timeline.content.map((item) => (
            <List.Item>{item}</List.Item>
          ))}
        </List>
      </Stack>
    </Card>
  );
}
