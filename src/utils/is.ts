export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

// 参数已定义
export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined';
}

// 参数未定义
export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val);
}

// 参数为null
export function isNull(val: unknown): val is null {
  return val === null;
}

// 判断是无效的或者未定义的参数
export function isNullOrUnRef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val);
}

// 判断是否为函数
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}

// 是否对象
export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Obejct');
}

// 是否是字符串
export function isString(val: unknown): val is string {
  return is(val, 'String');
}
