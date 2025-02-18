import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import { IApiResponeDto } from "./types";

export function useAxios() {
  const navigate = useNavigate();
  const axiosInstance = axios.create({
    withCredentials: true,
  });

  axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err instanceof AxiosError && err.response?.status == 401) {
        navigate("/auth/login");
      }
      return Promise.reject(err);
    }
  );

  const axiosGet = async <T>(url: string, config?: AxiosRequestConfig) => {
    const response = await axiosInstance.get<IApiResponeDto<T>>(url, config);
    return response.data;
  };

  const axiosPost = async <T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ) => {
    const response = await axiosInstance.post<IApiResponeDto<T>>(
      url,
      data,
      config
    );
    return response.data;
  };

  const axiosPut = async <T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ) => {
    const response = await axiosInstance.put<IApiResponeDto<T>>(
      url,
      data,
      config
    );
    return response.data;
  };

  const axiosDelete = async <T>(url: string, config?: AxiosRequestConfig) => {
    const response = await axiosInstance.delete<IApiResponeDto<T>>(url, config);
    return response.data;
  };

  return { axiosInstance, axiosGet, axiosPost, axiosPut, axiosDelete };
}
