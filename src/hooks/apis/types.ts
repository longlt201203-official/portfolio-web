export interface PaginationDto {
  page: number;
  take: number;
  totalRecord: number;
  totalPage: number;
  nextPage?: number;
  prevPage?: number;
}
export interface IApiResponeDto<T = any> {
  message?: string;
  data: T;
  pagination?: PaginationDto;
}

export interface IApiError<T = any> {
  code: string;
  message: string;
  detail: T;
}
