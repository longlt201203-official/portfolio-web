import { CreateBlogRequest } from "./create-blog.request";

export interface AiSuggestRequest {
    suggestRequestFields: string[];
    params: Partial<CreateBlogRequest>;
}