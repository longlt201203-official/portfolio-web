export interface BlogResponse {
  id: string;
  language: string;
  title: string;
  shortDescription: string;
  content?: string;
  createdAt: Date;
  updatedAt: Date;
  isVisible: boolean;
}
