import {
  EllipsisHorizontalIcon,
  EyeIcon,
  EyeSlashIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  ActionIcon,
  Badge,
  Box,
  Card,
  Group,
  Menu,
  Text,
  Title,
} from "@mantine/core";

export default function PostCard() {
  return (
    <Card withBorder>
      <Group justify="space-between" gap="xs">
        <Badge
          leftSection={<EyeSlashIcon className="h-3 w-3 " />}
          variant="light"
        >
          Hidden
        </Badge>

        <Menu>
          <Menu.Target>
            <ActionIcon variant="white" size="xl">
              <EllipsisHorizontalIcon className="h-6 w-6" />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item leftSection={<EyeIcon className="h-4 w-4" />}>
              Visible
            </Menu.Item>
            <Menu.Item leftSection={<PencilSquareIcon className="h-4 w-4" />}>
              Edit
            </Menu.Item>
            <Menu.Item leftSection={<TrashIcon className="h-4 w-4" />}>
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>

      <Box>
        <Title c="tawnyPort" order={2}>
          Post Title
        </Title>
        <Text c="dimmed" fz="sm">
          Published At: 20-12-2003 00:00
        </Text>
        <Text>This is a short description</Text>
      </Box>
    </Card>
  );
}
