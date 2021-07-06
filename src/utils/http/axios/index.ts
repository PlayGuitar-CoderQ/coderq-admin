import type { CreateAxiosOptions } from './axiosTransform';
import { ContentTypeEnum } from '@/enums/httpEnum';
import { VAxios } from './axios';
import { deepMerge } from '@/utils';

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(
    deepMerge(
      {
        authenticationScheme: '',
        timeout: 10 * 1000,
        urlPrefix: 'coderqJava',
        headers: { 'Content-Type': ContentTypeEnum.JSON },
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
          apiUrl: '/basic-api',
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
