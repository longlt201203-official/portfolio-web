import { useAxios } from "../axios";
import { AccountResponse } from "./account.response";

export function useAccountApis() {
  const { axiosPut } = useAxios();

  const updateAccount = async (id: string, data: Partial<AccountResponse>) => {
    const url = `/api/account/${id}`;
    const response = await axiosPut<AccountResponse>(url, data);
    return response.data;
  };

  return {
    updateAccount,
  };
}