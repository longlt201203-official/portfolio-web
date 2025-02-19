import {
  Button,
  Divider,
  Group,
  Loader,
  Modal,
  Stack,
  Text,
} from "@mantine/core";
import { BlogResponse } from "../../../hooks/apis/blog";

export interface DeleteBlogModalProps {
  blog?: BlogResponse;
  opened: boolean;
  onClose: () => void;
  onConfirm: (blog?: BlogResponse) => void;
  loading?: boolean;
}

export default function DeleteBlogModal({
  opened,
  onClose,
  blog,
  onConfirm,
  loading,
}: DeleteBlogModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Delete Confirm"
      centered
      closeOnClickOutside={!loading}
      closeOnEscape={!loading}
      withCloseButton={false}
    >
      <Stack gap="xl">
        <Text fz="sm">Are you sure you want to delete {blog?.title}?</Text>
        <Stack gap="xs">
          <Divider />
          <Group justify="end" gap="xs">
            {loading && <Loader size="xs" />}
            <Button
              onClick={() => onConfirm(blog)}
              size="xs"
              disabled={loading}
            >
              Delete
            </Button>
            <Button
              variant="outline"
              size="xs"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>
          </Group>
        </Stack>
      </Stack>
    </Modal>
  );
}
