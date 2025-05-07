import { useState } from 'react';
import { Stack, Title, Button, Group } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { ProjectForm } from './ProjectForm';
import { ProjectList } from './ProjectList';
import { DeleteProjectModal } from './DeleteProjectModal';
import { ProjectResponse, useProjectApis } from '../../../hooks/apis/projects';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { ProjectType } from './types';

export default function ProjectsPage() {
    const { listProjects, createProject, updateProject, deleteProject, toggleVisible } = useProjectApis();
    const listProjectsQuery = useQuery({
        initialData: [],
        queryKey: ['listProjects'],
        queryFn: listProjects,
    });
    const projects = listProjectsQuery.data;
    const createProjectMutation = useMutation({
        mutationFn: (values: ProjectType) => createProject({ name: values.name, description: values.description, projectLink: values.projectLink, order: values.order }),
        onSuccess: () => {
            toast.success('Project created successfully');
            listProjectsQuery.refetch();
        },
        onError: () => {
            toast.error('Project creation failed');
        }
    })
    const updateProjectMutation = useMutation({
        mutationFn: (project: ProjectResponse) => updateProject(project.id, { name: project.name, description: project.description, projectLink: project.projectLink, order: project.order }),
        onSuccess: () => {
            toast.success('Project updated successfully');
            listProjectsQuery.refetch();
        },
        onError: () => {
            toast.error('Project update failed');
        }
    })
    const deleteProjectMutation = useMutation({
        mutationFn: (project: ProjectResponse) => deleteProject(project.id),
        onSuccess: () => {
            toast.success('Project deleted successfully');
            listProjectsQuery.refetch();
        },
        onError: () => {
            toast.error('Project deletion failed');
        }
    })
    const toggleProjectVisibleMutation = useMutation({
        mutationFn: (project: ProjectResponse) => toggleVisible(project.id),
        onSuccess: () => {
            toast.success('Project visibility toggled successfully');
            listProjectsQuery.refetch();
        },
        onError: () => {
            toast.error('Project visibility toggle failed');
        }
    })

    const [opened, { open, close }] = useDisclosure(false);
    const [deleteModalOpened, { open: openDeleteModal, close: closeDeleteModal }] = useDisclosure(false);
    const [editingProject, setEditingProject] = useState<ProjectResponse | null>(null);
    const [projectToDelete, setProjectToDelete] = useState<ProjectResponse | null>(null);

    const handleOpenModal = (project?: ProjectResponse) => {
        if (project) {
            setEditingProject(project);
        } else {
            setEditingProject(null);
        }
        open();
    };

    const handleSubmit = (values: ProjectType) => {
        if (editingProject) {
            updateProjectMutation.mutate({ ...editingProject, ...values });
        } else {
            createProjectMutation.mutate(values);
        }
        close();
    };

    const handleDeleteClick = (project: ProjectResponse) => {
        setProjectToDelete(project);
        openDeleteModal();
    };

    const handleConfirmDelete = () => {
        if (projectToDelete) {
            deleteProjectMutation.mutate(projectToDelete);
            closeDeleteModal();
            setProjectToDelete(null);
        }
    };

    const handleToggleVisibility = (project: ProjectResponse) => {
        toggleProjectVisibleMutation.mutate(project);
    };

    return (
        <Stack>
            <Group justify="space-between">
                <Title>Projects</Title>
                <Button onClick={() => handleOpenModal()}>Add Project</Button>
            </Group>

            <ProjectList
                projects={projects}
                onEdit={handleOpenModal}
                onDelete={handleDeleteClick}
                onToggleVisibility={handleToggleVisibility}
            />

            <ProjectForm
                opened={opened}
                onClose={close}
                onSubmit={handleSubmit}
                editingProject={editingProject}
            />

            <DeleteProjectModal
                opened={deleteModalOpened}
                onClose={closeDeleteModal}
                onConfirm={handleConfirmDelete}
                project={projectToDelete}
            />
        </Stack>
    );
}