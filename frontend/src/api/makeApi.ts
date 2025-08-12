import * as Endpoints from './endpoints';
import { AxiosInstance, ResponseType } from 'axios';
export { Endpoints };

export interface GetConfig {
  headers?: Record<string, string>;
  timeout?: number;
  queryParams?: Record<string, string | number | boolean>;
}

export interface PostConfig {
  headers?: Record<string, string>;
  timeout?: number;
  queryParams?: Record<string, string | number | boolean>;
}
export interface PutConfig {
  headers?: Record<string, string>;
  timeout?: number;
  queryParams?: Record<string, string | number | boolean>;
}
export interface PatchConfig {
  headers?: Record<string, string>;
  timeout?: number;
  queryParams?: Record<string, string | number | boolean>;
}

export const makeApi = (axiosInstance: AxiosInstance) => {
  return {
    getApi: makeGetApi(axiosInstance),
    postApi: makePostApi(axiosInstance),
    putApi: makePutApi(axiosInstance),
    deleteApi: makeDeleteApi(axiosInstance),
  };
};

const makeGetApi = (axiosInstance: AxiosInstance) => {
  return async function getApi<T extends keyof Endpoints.GET>(
    url: T,
    params?: Endpoints.GET[T]['params'],
    config?: {
      headers?: Record<string, string>;
    }
  ): Promise<Endpoints.GET[T]['result']> {
    try {
      const response = await axiosInstance.get(url as string, {
        params,
        headers: config?.headers,
      });
      return response.data as Endpoints.GET[T]['result'];
    } catch (error) {
      throw error;
    }
  };
};

const makePostApi = (axiosInstance: AxiosInstance) => {
  return async function postApi<T extends keyof Endpoints.POST>(
    url: T,
    data: Endpoints.POST[T]['params'],
    config?: {
      headers?: Record<string, string>;
      timeout?: number;
      responseType?: ResponseType;
    }
  ): Promise<Endpoints.POST[T]['result']> {
    const result = await axiosInstance.post(url as string, data, config);
    return result.data as Endpoints.POST[T]['result'];
  };
};

const makePutApi = (axiosInstance: AxiosInstance) => {
  return async function putApi<T extends keyof Endpoints.PUT>(
    url: T,
    data: Endpoints.PUT[T]['params'],
    config?: {
      headers?: Record<string, string>;
      timeout?: number;
    }
  ): Promise<Endpoints.PUT[T]['result']> {
    const result = await axiosInstance.put(url as string, data, config);
    return result.data as Endpoints.PUT[T]['result'];
  };
};

const makeDeleteApi = (axiosInstance: AxiosInstance) => {
  return async function deleteApi<T extends keyof Endpoints.DELETE>(
    url: T,
    params?: Endpoints.DELETE[T]['params']
  ): Promise<Endpoints.DELETE[T]['result']> {
    const result = await axiosInstance.delete(url as string, {
      params,
    });
    return result.data as Endpoints.DELETE[T]['result'];
  };
};
