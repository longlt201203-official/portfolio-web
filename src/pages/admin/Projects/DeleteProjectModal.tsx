import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import { ProjectResponse } from "../../../hooks/apis/projects";

interface DeleteProjectModalProps {
    opened: boolean;
    onClose: () => void;
    onConfirm: () => void;
    project: ProjectResponse | null;
}

export function DeleteProjectModal({ opened, onClose, onConfirm, project }: DeleteProjectModalProps) {
    if (!project) return null;

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            title="Delete Project"
            centered
        >
            <Stack>
                <Text>
                    Are you sure you want to delete the project <strong>{project.name}</strong>?
                    This action cannot be undone.
                </Text>
                
                <Group justify="flex-end">
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button color="red" onClick={onConfirm}>
                        Delete
                    </Button>
                </Group>
            </Stack>
        </Modal>
    );
}