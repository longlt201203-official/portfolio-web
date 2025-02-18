export interface CreateBlogRequest {
  language: string;
  title: string;
  shortDescription: string;
  content: string;
  categories: string[];
}
