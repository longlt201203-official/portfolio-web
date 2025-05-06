import { Button, Group, Modal, Stack, TextInput, Textarea, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { ProjectResponse } from "../../../hooks/apis/projects";
import { useEffect } from "react";
import { ProjectType, ProjectZodSchema } from "./types";

interface ProjectFormProps {
    opened: boolean;
    onClose: () => void;
    onSubmit: (values: ProjectType) => void;
    editingProject: ProjectResponse | null;
}

export function ProjectForm({ opened, onClose, onSubmit, editingProject }: ProjectFormProps) {
    // Initialize form with Zod resolver
    const form = useForm<ProjectType>({
        initialValues: {
            name: '',
            description: '',
            projectLink: '',
            order: 0
        },
        validate: zodResolver(ProjectZodSchema)
    });

    useEffect(() => {
        if (editingProject) {
            form.setValues({
                name: editingProject.name,
                description: editingProject.description,
                projectLink: editingProject.projectLink,
                order: editingProject.order
            });
        }
    }, [editingProject])

    const handleSubmit = (values: typeof form.values) => {
        onSubmit(values);
        form.reset();
    };

    return (
        <Modal 
            opened={opened} 
            onClose={onClose} 
            title={editingProject ? "Edit Project" : "Add New Project"}
        >
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack>
                    <TextInput
                        label="Name"
                        placeholder="Project name"
                        required
                        {...form.getInputProps('name')}
                    />
                    <Textarea
                        label="Description"
                        placeholder="Project description"
                        required
                        minRows={3}
                        {...form.getInputProps('description')}
                    />
                    <TextInput
                        label="Project Link"
                        placeholder="https://example.com"
                        required
                        {...form.getInputProps('projectLink')}
                    />
                    <NumberInput
                        label="Display Order"
                        description="Lower numbers appear first"
                        placeholder="0"
                        min={0}
                        {...form.getInputProps('order')}
                    />
                    <Group justify="flex-end">
                        <Button variant="outline" onClick={onClose}>Cancel</Button>
                        <Button type="submit">{editingProject ? 'Update' : 'Create'}</Button>
                    </Group>
                </Stack>
            </form>
        </Modal>
    );
}