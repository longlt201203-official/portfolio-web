import { axiosPost, axiosPut } from "../axios";
import { IBasicLoginRequest } from "./basic-login.request";
import { ChangePasswordRequest } from "./change-password.request";

export async function basicLogin(dto: IBasicLoginRequest) {
  const url = "/api/auth/basic-login";
  const response = await axiosPost(url, dto);
  return response.data;
}
export async function changePassword(dto: ChangePasswordRequest) {
  const url = "/api/auth/change-password";
  const response = await axiosPut(url, dto);
  return response.data;
}
