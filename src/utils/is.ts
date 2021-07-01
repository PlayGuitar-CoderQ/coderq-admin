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
