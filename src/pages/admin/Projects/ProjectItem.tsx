import { ActionIcon, Badge, Group, Table, Text } from "@mantine/core";
import { PencilIcon, TrashIcon, ArrowTopRightOnSquareIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import { ProjectResponse } from "../../../hooks/apis/projects";

interface ProjectItemProps {
    project: ProjectResponse;
    onEdit: (project: ProjectResponse) => void;
    onDelete: (project: ProjectResponse) => void;
}

export function ProjectItem({ project, onEdit, onDelete }: ProjectItemProps) {
    return (
        <Table.Tr>
            <Table.Td>{project.name}</Table.Td>
            <Table.Td>
                <Text lineClamp={2}>{project.description}</Text>
            </Table.Td>
            <Table.Td>{dayjs(project.createdAt).format('MMM D, YYYY')}</Table.Td>
            <Table.Td>
                <Group gap="xs">
                    <ActionIcon
                        variant="subtle"
                        color="blue"
                        component="a"
                        href={project.projectLink}
                        target="_blank"
                    >
                        <ArrowTopRightOnSquareIcon width={16} height={16} />
                    </ActionIcon>
                    <Badge>{new URL(project.projectLink).hostname}</Badge>
                </Group>
            </Table.Td>
            <Table.Td>{project.order}</Table.Td>
            <Table.Td>
                <Badge>{project.isHidden ? "Hidden" : "Visible"}</Badge>
            </Table.Td>
            <Table.Td>
                <Group gap="xs">
                    <ActionIcon variant="subtle">
                        {project.isHidden ? <EyeSlashIcon width={16} height={16} /> : <EyeIcon width={16} height={16} />}
                    </ActionIcon>
                    <ActionIcon variant="subtle" color="blue" onClick={() => onEdit(project)}>
                        <PencilIcon width={16} height={16} />
                    </ActionIcon>
                    <ActionIcon variant="subtle" color="red" onClick={() => onDelete(project)}>
                        <TrashIcon width={16} height={16} />
                    </ActionIcon>
                </Group>
            </Table.Td>
        </Table.Tr>
    );
}