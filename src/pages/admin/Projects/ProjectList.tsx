import { Table } from "@mantine/core";
import { ProjectItem } from "./ProjectItem";
import { ProjectResponse } from "../../../hooks/apis/projects";

interface ProjectListProps {
    projects: ProjectResponse[];
    onEdit: (project: ProjectResponse) => void;
    onDelete: (project: ProjectResponse) => void;
    onToggleVisibility: (project: ProjectResponse) => void;
}

export function ProjectList({ projects, onEdit, onDelete, onToggleVisibility }: ProjectListProps) {
    return (
        <Table striped highlightOnHover>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>Description</Table.Th>
                    <Table.Th>Created At</Table.Th>
                    <Table.Th>Project Link</Table.Th>
                    <Table.Th>Order</Table.Th>
                    <Table.Th>Visibility</Table.Th>
                    <Table.Th>Actions</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {projects.map((project) => (
                    <ProjectItem 
                        key={project.id} 
                        project={project} 
                        onEdit={onEdit} 
                        onDelete={onDelete} 
                        onToggleVisibility={onToggleVisibility}
                    />
                ))}
            </Table.Tbody>
        </Table>
    );
}