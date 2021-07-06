/**
 * @description 数据处理类
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { Result, RequestOptions } from '#/axios';

export interface CreateAxiosOptions extends AxiosRequestConfig {
  // 认证的名称
  authenticationScheme?: string;
  // url前缀名称
  urlPrefix?: string;
  // 请求，改造类
  transform?: AxiosTransform;
  // 请求配置
  requestOptions?: RequestOptions;
}

export abstract class AxiosTransform {
  /**
   * 在请求之前进行配置
   */
  beforeRequestHook?: (
    config: AxiosRequestConfig,
    optons: RequestOptions,
  ) => AxiosRequestConfig;

  /**
   * 请求成功的处理
   */
  transformRequestHook?: (
    res: AxiosResponse<Result>,
    options: RequestOptions,
  ) => any;

  /**
   * @description 请求失败处理
   */
  requestCatchHook?: (e: Error, options: RequestOptions) => Promise<any>;

  /**
   * @description 请求之前的拦截器
   */
  requestInterceptors?: (
    config: AxiosRequestConfig,
    options: CreateAxiosOptions,
  ) => AxiosRequestConfig;

  /**
   * @description 请求之后的拦截器
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  /**
   * @description 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void;

  /**
   * @description 请求之后的拦截处理
   */
  responseInterceptorsCatch?: (error: Error) => void;
}
