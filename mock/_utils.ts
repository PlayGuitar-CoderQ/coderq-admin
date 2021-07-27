/**
 * @description 请求成功返回
 * @param result 请求成功的数据
 * @returns 返回的请求后的对象
 */
export function resultSuccess<T = Recordable>(
  result: T,
  { message = 'ok' } = {},
) {
  return {
    code: 0,
    result,
    message,
    type: 'success',
  };
}

/**
 * @description 返回分页后的结果
 */
export function resultPageSuccess<T = any>(
  page: number,
  pageSize: number,
  list: T[],
  { message = 'ok' } = {},
) {
  const pageData = pagination(page, pageSize, list);

  return {
    ...resultSuccess({
      items: pageData,
      total: list.length,
    }),
    message,
  };
}

export function resultError(
  message = 'Request failed',
  { code = -1, result = null } = {},
) {
  return {
    code,
    result,
    message,
    type: 'error',
  };
}

export interface requestParams {
  method: string;
  body: any;
  headers?: { authorization?: string };
  query: any;
}

// 分页逻辑
export function pagination<T = any>(
  pageNo: number,
  pageSize: number,
  array: T[],
): T[] {
  const offset = (pageNo - 1) * Number(pageSize);
  const ret =
    offset + Number(pageSize) >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + Number(pageSize));
  return ret;
}
