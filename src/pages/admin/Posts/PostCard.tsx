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
import { BlogResponse } from "../../../hooks/apis/blog";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export interface PostCardProps {
  blog: BlogResponse;
  onToggleVisible?: (blog: BlogResponse) => void;
  onDelete?: (blog: BlogResponse) => void;
}

export default function PostCard({
  blog,
  onToggleVisible,
  onDelete,
}: PostCardProps) {
  return (
    <Card withBorder>
      <Group justify="space-between" gap="xs">
        <Badge
          leftSection={
            blog.isVisible ? (
              <EyeIcon className="h-4 w-4" />
            ) : (
              <EyeSlashIcon className="h-3 w-3 " />
            )
          }
          variant={blog.isVisible ? "outline" : "light"}
        >
          {blog.isVisible ? "Visible" : "Hidden"}
        </Badge>

        <Menu>
          <Menu.Target>
            <ActionIcon variant="white" size="xl">
              <EllipsisHorizontalIcon className="h-6 w-6" />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              leftSection={
                blog.isVisible ? (
                  <EyeSlashIcon className="h-3 w-3 " />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )
              }
              onClick={() => onToggleVisible && onToggleVisible(blog)}
            >
              {blog.isVisible ? "Hidden" : "Visible"}
            </Menu.Item>
            <Menu.Item
              leftSection={<PencilSquareIcon className="h-4 w-4" />}
              component={Link}
              to={`write/${blog.id}`}
            >
              Edit
            </Menu.Item>
            <Menu.Item
              leftSection={<TrashIcon className="h-4 w-4" />}
              onClick={() => onDelete && onDelete(blog)}
            >
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>

      <Box>
        <Title c="tawnyPort" order={4}>
          {blog.title}
        </Title>
        <Text c="dimmed" fz={12}>
          Last Update: {dayjs(blog.updatedAt).format("DD/MM/YYYY HH:mm:ss")}
        </Text>
        <Text fz={14}>{blog.shortDescription}</Text>
      </Box>
    </Card>
  );
}
