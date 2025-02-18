import { AccountResponse } from "../account";
import { useAxios } from "../axios";
import { ChangePasswordRequest } from "./change-password.request";

export function useAuthApis() {
  const { axiosPut, axiosGet } = useAxios();

  const changePassword = async (dto: ChangePasswordRequest) => {
    const url = "/api/auth/change-password";
    const response = await axiosPut(url, dto);
    return response.data;
  };

  const getProfile = async () => {
    const url = "/api/auth/profile";
    const response = await axiosGet<AccountResponse>(url);
    return response.data;
  };

  return { changePassword, getProfile };
}
