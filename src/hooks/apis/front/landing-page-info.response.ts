import { BlogResponse } from "../blog";
import { TimelineResponse } from "../timeline";

export interface LandingPageInfoResponse {
  blogs: BlogResponse[];
  timelines: TimelineResponse[]
}
