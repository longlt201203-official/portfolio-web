import { BlogResponse } from "../blog";
import { InfoResponse } from "../info";
import { TimelineResponse } from "../timeline";

export interface LandingPageInfoResponse {
  blogs: BlogResponse[];
  timelines: TimelineResponse[];
  info: InfoResponse;
}
