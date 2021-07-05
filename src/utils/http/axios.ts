import axios from 'axios';
import { ContentTypeEnum, RequestEnum } from '@/enums/httpEnum';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import qs from 'qs';

/**
 * @description axios 模块
 */
export class VAxios {
  private axiosIntstance: AxiosInstance;
  private readonly options: AxiosRequestConfig;

  constructor(options: AxiosRequestConfig) {
    this.options = options;
    this.axiosIntstance = axios.create(options);
    // 注入拦截器留个空-----
  }

  /**
   * @description 用于直接创建axios实例的方法
   */
  private createAxios(config: AxiosRequestConfig): void {
    this.axiosIntstance = axios.create(config);
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
  configAxios(config: AxiosRequestConfig) {
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
}
