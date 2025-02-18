export interface IApiResponeDto<T = any> {
  message?: string;
  data: T;
  pagination?: any;
}

export interface IApiError<T = any> {
  code: string;
  message: string;
  detail: T;
}
