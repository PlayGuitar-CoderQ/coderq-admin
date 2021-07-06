// 用于一些接口请求的错误时候的选择什么状态展示
export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;

export interface RequestOptions {
  // 将请求参数拼接到 url
  joinParamsToUrl?: boolean;
  // 格式化请求参数时间
  formatDate: boolean;
  // 是否处理请求结果
  isTransformResponse?: boolean;
  // 是否返回响应头
  // 例如: 当您需要获取响应头时使用此属性
  isReturnNativeResponse?: boolean;
  // 是否加入url
  joinPrefix?: boolean;
  // 如果地址空白使用地址url
  apiUrl?: string;
  // 错误消息提示类型
  errorMessageMode: ErrorMessageMode;
  // 是否添加时间戳
  joinTime?: boolean;
  // 是否需要token
  ignoreCancelToken?: boolean;
  // 是否需要设置token在请求头
  withToken?: boolean;
}

// 请求结果 （根据后端约定返回）
export interface Result<T = any> {
  code: number;
  type: 'success' | 'error' | 'warning';
  message: string;
  result: T;
}

// 上传文件的参数
export interface UploadFileParams {
  // 其他参数
  data?: Recordable;
  // 文件参数接口字段名
  name?: string;
  // 文件数据类型 （文件 | 文件切片）
  file: File | Blob;
  // 文件名称
  filename?: string;
  // 其他字段
  [key: string]: any;
}
