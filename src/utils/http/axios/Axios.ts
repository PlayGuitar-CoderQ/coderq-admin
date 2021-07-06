import axios, { AxiosResponse } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ContentTypeEnum, RequestEnum } from '@/enums/httpEnum';
import { RequestOptions, Result } from '../../../../types/axios';
import type { CreateAxiosOptions } from './axiosTransform';
import { cloneDeep } from 'lodash-es';
import { isFunction } from '@/utils/is';
import qs from 'qs';

/**
 * @description axios 模块
 */
export class VAxios {
  private axiosIntstance: AxiosInstance;
  private readonly options: CreateAxiosOptions;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosIntstance = axios.create(options);
    // 注入拦截器留个空-----
  }

  /**
   * @description 用于直接创建axios实例的方法
   */
  private createAxios(config: CreateAxiosOptions): void {
    this.axiosIntstance = axios.create(config);
  }

  /**
   * @description 获取请求改造配置
   */
  private getTransform() {
    const { transform } = this.options;
    return transform;
  }

  /**
   * @description 获取axios实例
   */
  getAxios(): AxiosInstance {
    return this.axiosIntstance;
  }

  /**
   * 用于重新添加配置生成不同实例
   */
  configAxios(config: CreateAxiosOptions) {
    if (!this.axiosIntstance) {
      return;
    }
    this.createAxios(config);
  }

  /**
   * @description 配置请求头
   */
  setHeader(headers: any): void {
    if (!this.axiosIntstance) {
      return;
    }
    Object.assign(this.axiosIntstance.defaults.headers, headers);
  }

  /**
   * @description 支持表格数据提交
   */
  supportFormData(config: AxiosRequestConfig) {
    const headers = config.headers || this.options.headers;
    const contentType = headers?.['Content-Type'] || headers?.['content-type'];

    if (
      contentType !== ContentTypeEnum.FORM_URLENCODED ||
      !Reflect.has(config, 'data') ||
      config.method?.toUpperCase() === RequestEnum.GET
    ) {
      return config;
    }

    return {
      ...config,
      data: qs.stringify(config.data, { arrayFormat: 'brackets' }),
    };
  }

  request<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    let conf: CreateAxiosOptions = cloneDeep(config);
    const transform = this.getTransform();

    const { requestOptions } = this.options;

    // 合并额外的配置
    const opt: RequestOptions = Object.assign({}, requestOptions, options);

    const { beforeRequestHook, requestCatchHook, transformRequestHook } =
      transform || {};
    // 触发请求前的钩子改造配置
    if (beforeRequestHook && isFunction(beforeRequestHook)) {
      conf = beforeRequestHook(conf, opt);
    }
    conf.requestOptions = opt;

    // 内部会处理是否为form-data，来返回配置
    conf = this.supportFormData(conf);

    return new Promise((resolve, reject) => {
      this.axiosIntstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          if (transformRequestHook && isFunction(transformRequestHook)) {
            try {
              const ret = transformRequestHook(res, opt);
              resolve(ret);
            } catch (err) {
              reject(err || new Error('请求失败'));
            }
            return;
          }
          resolve(res as unknown as Promise<T>);
        })
        .catch((e: Error) => {
          if (requestCatchHook && isFunction(requestCatchHook)) {
            reject(requestCatchHook(e, opt));
            return;
          }
          reject(e);
        });
    });
  }
}
