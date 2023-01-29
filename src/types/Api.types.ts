export type RequestMethodType = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";

export interface RequestType {
  endpoint: string;
  method?: RequestMethodType;
  headers?: Record<string, string>;
  queryParams?: Record<string, any>;
  body?: Record<string, any>;
}

export interface ResponseApiType<T> extends Record<string, any> {
  page?: number;
  results?: T[];
  total_pages?: number;
  total_results?: number;
  status_message?: string;
  status_code?: string;
  success?: boolean;
}
