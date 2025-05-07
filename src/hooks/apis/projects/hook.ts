import { useAxios } from "../axios"
import { CreateProjectRequest } from "./create-project.request";
import { ProjectResponse } from "./project.response";
import { UpdateProjectRequest } from "./update-project.request";

export function useProjectApis() {
    const { axiosGet, axiosPost, axiosPut, axiosDelete } = useAxios();

    const createProject = async (dto: CreateProjectRequest) => {
        const url = `/api/project`;
        const response = await axiosPost(url, dto);
        return response.data;
    }

    const updateProject = async (id: string, dto: UpdateProjectRequest) => {
        const url = `/api/project/${id}`;
        const response = await axiosPut(url, dto);
        return response.data;
    }

    const deleteProject = async (id: string) => {
        const url = `/api/project/${id}`;
        const response = await axiosDelete(url);
        return response.data;
    }

    const listProjects = async () => {
        const url = `/api/project`;
        const response = await axiosGet<ProjectResponse[]>(url);
        return response.data;
    }

    const getProject = async (id: string) => {
        const url = `/api/project/${id}`;
        const response = await axiosGet<ProjectResponse>(url);
        return response.data;
    }

    const toggleVisible = async (id: string) => {
        const url = `/api/project/${id}/toggle-visible`;
        const response = await axiosGet(url);
        return response.data;
    }

    return {
        createProject,
        updateProject,
        deleteProject,
        listProjects,
        getProject,
        toggleVisible
    }
}