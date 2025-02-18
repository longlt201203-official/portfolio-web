import { useAxios } from "../axios";
import { BlogResponse } from "./blog.response";
import { CreateBlogRequest } from "./create-blog.request";
import { UpdateBlogRequest } from "./update-blog.request";

export function useBlogApis() {
  const { axiosGet, axiosPost, axiosPut } = useAxios();

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

  return { listBlogs, getBlogById, createBlog, updateBlogById };
}
