import { useAxios } from "../axios";
import { AiSuggestRequest } from "./ai-suggest.request";
import { BlogResponse } from "./blog.response";
import { CreateBlogRequest } from "./create-blog.request";
import { UpdateBlogRequest } from "./update-blog.request";

export function useBlogApis() {
  const { axiosGet, axiosPost, axiosPut, axiosDelete } = useAxios();

  const listBlogs = async () => {
    const url = "/api/blog";
    const response = await axiosGet<BlogResponse[]>(url);
    return response.data;
  };

  const getBlogById = async (id: string) => {
    const url = `/api/blog/${id}`;
    const response = await axiosGet<BlogResponse>(url);
    return response.data;
  };

  const createBlog = async (dto: CreateBlogRequest) => {
    const url = "/api/blog";
    const resposne = await axiosPost(url, dto);
    return resposne.data;
  };

  const updateBlogById = async (id: string, dto: UpdateBlogRequest) => {
    const url = `/api/blog/${id}`;
    const response = await axiosPut(url, dto);
    return response.data;
  };

  const toggleVisible = async (id: string) => {
    const url = `/api/blog/${id}/toggle-visible`;
    const response = await axiosGet(url);
    return response.data;
  };

  const deleteBlogById = async (id: string) => {
    const url = `/api/blog/${id}`;
    const response = await axiosDelete(url);
    return response.data;
  };

  const aiSuggest = async (dto: AiSuggestRequest) => {
    const url = `/api/ai/suggest`;
    const response = await axiosPost<Partial<CreateBlogRequest>>(url, dto);
    return response.data;
  }

  return {
    listBlogs,
    getBlogById,
    createBlog,
    updateBlogById,
    toggleVisible,
    deleteBlogById,
    aiSuggest
  };
}
