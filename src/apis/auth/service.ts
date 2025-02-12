import { axiosPost } from "../axios";
import { IBasicLoginRequest } from "./basic-login.request";

export async function basicLogin(dto: IBasicLoginRequest) {
  const url = "/api/auth/basic-login";
  const response = await axiosPost(url, dto);
  return response.data;
}
