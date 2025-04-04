import { useAxios } from "../axios";
import { TimelineResponse } from "./timeline.response";
import { CreateTimelineRequest } from "./create-timeline.request";
import { UpdateTimelineRequest } from "./update-timeline.request";

export function useTimelineApis() {
  const { axiosGet, axiosPost, axiosPut, axiosDelete } = useAxios();

  const createTimeline = async (data: CreateTimelineRequest) => {
    const response = await axiosPost<TimelineResponse>("/api/timeline", data);
    return response.data;
  };

  const getTimelines = async () => {
    const response = await axiosGet<TimelineResponse[]>("/api/timeline");
    return response.data;
  };

  const getTimeline = async (id: string) => {
    const response = await axiosGet<TimelineResponse>(`/api/timeline/${id}`);
    return response.data;
  };

  const updateTimeline = async (id: string, data: UpdateTimelineRequest) => {
    const response = await axiosPut<TimelineResponse>(`/api/timeline/${id}`, data);
    return response.data;
  };

  const deleteTimeline = async (id: string) => {
    const response = await axiosDelete<void>(`/api/timeline/${id}`);
    return response.data;
  };

  return {
    createTimeline,
    getTimelines,
    getTimeline,
    updateTimeline,
    deleteTimeline,
  };
}