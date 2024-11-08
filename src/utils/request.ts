import { message } from "antd";

export interface Response<T> {
  code: number;
  message: string;
  data: T | null;
}

const request = async <T>(params: {
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: any,
  headers?: Record<string, string>
  queryParams?: Record<string, string | number>
}): Promise<T> => {
  let url = `${window.BASE_URL}${params.url}`;

  const authorization = localStorage.getItem('token');

  const options: RequestInit = {
    method: params.method,
    headers: {
      ...params.headers,
      Authorization: `Bear ${authorization}`
    },
  };

  if (params.body) {
    if (params.body instanceof FormData) {
      options.body = params.body;
    } else {
      (options.headers as Record<string, string>)['Content-Type'] = 'application/json';
      options.body = JSON.stringify(params.body);
    }
  }

  if (params.queryParams) {
    const queryParams = new URLSearchParams();
    Object.keys(params.queryParams).forEach(key => {
      queryParams.append(key, String(params.queryParams![key]));
    });
    url += `?${queryParams.toString()}`;
  }

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    if (result.code != 0) {
      if (result.code === 100) {
        localStorage.removeItem('token');
        location.href = '/login';
      }
      throw new Error(result.message);
    }
    return result.data;
  } catch (error) {
    message.error(String(error));
    throw new Error(String(error));
  }
};

export default request;
