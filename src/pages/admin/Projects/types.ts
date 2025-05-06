import { z } from "zod";

export const ProjectZodSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    description: z.string().min(1, 'Description is required'),
    projectLink: z.string().url('Must be a valid URL'),
    order: z.number()
});

export type ProjectType = z.infer<typeof ProjectZodSchema>;