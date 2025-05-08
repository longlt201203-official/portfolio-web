import { BlogResponse } from "../blog";
import { InfoResponse } from "../info";
import { ProjectResponse } from "../projects";
import { TimelineResponse } from "../timeline";

export interface LandingPageInfoResponse {
  blogs: BlogResponse[];
  timelines: TimelineResponse[];
  info: InfoResponse;
  projects: ProjectResponse[]
}
