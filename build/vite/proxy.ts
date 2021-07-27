/**
 * @description 用于解析.env.development 代理配置
 */
import type { ProxyOptions } from 'vite'; // 代理配置

type ProxyItem = [string, string]; // 代理配置元组数据类型

type ProxyList = ProxyItem[];

type PRoxyTargetList = Record<
  string,
  ProxyOptions & { rewrite: (path: string) => string }
>;

// 正则匹配https
const httpsRE = /^https:\/\//;

/**
 * @description 生成proxy
 * @param list
 */
export function createProxy(list: ProxyList = []) {
  const ret: PRoxyTargetList = {};
  // 从env.development定义的proxy元组
  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target); // 判断是否为https
    console.log('target', target, prefix);

    ret[prefix] = {
      target: target, // 要解析的url字符串
      changeOrigin: true, // 将主机头改为目标URL
      ws: true, // 是否代理websockets
      rewrite: (path: string) => path.replace(new RegExp(`^${prefix}`), ''), // 请求url地址重写
      ...(isHttps ? { secure: false } : {}),
    };
  }
  return ret;
}
