import axios, { AxiosRequestConfig } from "axios";
import { IApiResponeDto } from "./types";

axios.defaults.withCredentials = true;

export async function axiosGet<T>(url: string, config?: AxiosRequestConfig) {
  const response = await axios.get<IApiResponeDto<T>>(url, config);
  return response.data;
}

export async function axiosPost<T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) {
  const response = await axios.post<IApiResponeDto<T>>(url, data, config);
  return response.data;
}

export async function axiosPut<T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) {
  const response = await axios.put<IApiResponeDto<T>>(url, data, config);
  return response.data;
}

export async function axiosDelete<T>(url: string, config?: AxiosRequestConfig) {
  const response = await axios.delete<IApiResponeDto<T>>(url, config);
  return response.data;
}
