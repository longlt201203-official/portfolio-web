import { useAxios } from "../axios";
import { BlogResponse } from "../blog";
import { LandingPageInfoResponse } from "./landing-page-info.response";
import { ListBlogsQuery } from "./list-blogs.query";
import { ViewBlogQuery } from "./view-blog.query";

export function useFrontApis() {
  const { axiosGet } = useAxios();

  const listBlogs = async (query: ListBlogsQuery) => {
    const url = `/api/front-api/list-blogs`;
    const response = await axiosGet<BlogResponse[]>(url, {
      params: query,
    });
    return { data: response.data, pagination: response.pagination };
  };

  const viewBlog = async (query: ViewBlogQuery) => {
    const url = `/api/front-api/view-blog`;
    const response = await axiosGet<BlogResponse>(url, {
      params: query,
    });
    return response.data;
  };

  const getLandingPageInfo = async () => {
    const url = `/api/front-api/landing-page`;
    const response = await axiosGet<LandingPageInfoResponse>(url);
    return response.data;
  };

  return { listBlogs, viewBlog, getLandingPageInfo };
}
