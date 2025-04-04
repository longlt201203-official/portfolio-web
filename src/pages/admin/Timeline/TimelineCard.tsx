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
import { TimelineResponse } from "../../../hooks/apis/timeline";

interface TimelineCardProps {
  timeline: TimelineResponse;
  onEdit: (timeline: TimelineResponse) => void;
  onDelete: (id: string) => void;
}

export default function TimelineCard({ timeline, onEdit, onDelete }: TimelineCardProps) {
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
              <Menu.Item 
                leftSection={<PencilSquareIcon className="h-4 w-4" />}
                onClick={() => onEdit(timeline)}
              >
                Edit
              </Menu.Item>
              <Menu.Item 
                leftSection={<TrashIcon className="h-4 w-4" />}
                onClick={() => onDelete(timeline.id)}
                color="red"
              >
                Delete
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>

        <Title order={3}>{timeline.title}</Title>
        <List className="list-disc">
          {timeline.content.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </Stack>
    </Card>
  );
}