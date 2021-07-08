import type { AxiosResponse } from 'axios';
import type { AxiosTransform, CreateAxiosOptions } from './axiosTransform';

import { joinTimestamp, formatRequestDate } from './helper';
import { ContentTypeEnum, RequestEnum, ResultEnum } from '@/enums/httpEnum';
import { VAxios } from './Axios';
import { deepMerge } from '@/utils';
import { setObjToUrlParams } from '@/utils';
import { Result, RequestOptions } from '#/axios';
import { isString } from '@/utils/is';
import { useGlobSetting } from '@/hooks/setting';
const globSetting = useGlobSetting();
const urlPrefix = globSetting.urlPrefix;

const transform: AxiosTransform = {
  /**
   * @description 处理请求数据，如果数据不是预期格式可直接抛出错误
   */
  transformRequestHook: (
    res: AxiosResponse<Result>,
    options: RequestOptions,
  ) => {
    const { isTransformResponse, isReturnNativeResponse } = options;
    // 是否返回原生响应头 比如： 需要获取响应头时使用该属性
    if (isReturnNativeResponse) {
      return res;
    }
    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data, message这些的时候开启
    if (!isTransformResponse) {
      return res.data;
    }

    // 错误的时候返回
    const { data } = res;
    if (!data) {
      // 返回 http请求没有返回返回数据
      throw new Error('请求失败');
    }
    // 这里code, result, message 为后台统一的字段，需要在type.ts 修改为自己的接口配置
    const { result, code, message } = data;

    // 这里的逻辑可以根据项目进行修改
    const hasSuccess =
      data && Reflect.has(data, 'code') && code === ResultEnum.SUCCESS;
    if (hasSuccess) {
      return result;
    }

    // 在此处根据项目的实际情况对不同的code执行不同的操作
    // 如果不希望中断当前请求， 请return数据, 否则直接抛出异常即可
    let titmeOutMsg = '';
    switch (code) {
      case ResultEnum.TIMEOUT:
        titmeOutMsg = '登录超时,请重新登录';
      default:
        if (message) {
          titmeOutMsg = message;
        }
    }

    // 预留添加弹窗----
    console.log(titmeOutMsg);
    throw new Error('请求出错，请稍候重试');
  },

  /**
   * @description 请求之前处理config
   */
  beforeRequestHook: (config, options) => {
    debugger;
    const {
      apiUrl,
      joinPrefix,
      joinParamsToUrl,
      formatDate,
      joinTime = true,
    } = options;

    if (joinPrefix) {
      config.url = `${urlPrefix}${config.url}`;
    }

    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`;
    }
    const params = config.params || {};
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (!isString(params)) {
        // 给 get 请求加上时间戳参数，避免从缓存中拿数据
        config.params = Object.assign(
          params || {},
          joinTimestamp(joinTime, false),
        );
      } else {
        // 兼容restful风格
        config.url = config.url + params + `${joinTimestamp(joinTime, true)}`;
        config.params = undefined;
      }
    } else {
      if (!isString(params)) {
        formatDate && formatRequestDate(params);
        config.data = params;
        config.params = undefined;
        if (joinParamsToUrl) {
          config.url = setObjToUrlParams(config.url as string, config.data);
        }
      } else {
        // 兼容restful风格
        config.url = config.url + params;
        config.params = undefined;
      }
    }
    return config;
  },

  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: (config, options) => {
    // 请求之前处理config
    // 预留获取token
    const token = '';
    if (token) {
      // jwt token
      config.headers.Authorization = options.authenticationScheme
        ? `${options.authenticationScheme} ${token}`
        : token;
    }
    return config;
  },

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors: (res: AxiosResponse<any>) => {
    return res;
  },

  // 预留---- 错误代码出来
};

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(
    deepMerge(
      {
        authenticationScheme: '',
        timeout: 10 * 1000,
        urlPrefix: urlPrefix,
        headers: { 'Content-Type': ContentTypeEnum.JSON },
        // 数据处理方式
        transform,
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 默认将prefix 添加到url
          joinPrefix: true,
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          // 需要对返回数据进行处理
          isTransformResponse: true,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 格式化提交参数时间
          formatDate: true,
          // 消息提示类型
          errorMessageMode: 'message',
          // 接口地址
          apiUrl: globSetting.apiUrl,
          //  是否加入时间戳
          joinTime: true,
          // 忽略重复请求
          ignoreCancelToken: true,
          // 是否携带token
          withToken: true,
        },
      },
      opt || {},
    ),
  );
}

export const defHttp = createAxios();
