/**
 * @description 用于解析.env.development 代理配置
 */
import type { ProxyOptions } from 'vite';

type ProxyItem = [string, string];

type ProxyList = ProxyItem[];

type PRoxyTargetList = Record<
  string,
  ProxyOptions & { rewrite: (path: string) => string }
>;

const httpsRE = /^https:\/\//;

/**
 * @description 生成proxy
 * @param list
 */
export function createProxy(list: ProxyList = []) {
  const ret: PRoxyTargetList = {};
  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target);

    ret[prefix] = {
      target: target,
      changeOrigin: true,
      ws: true,
      rewrite: (path: string) => path.replace(new RegExp(`^${prefix}`), ''),
      ...(isHttps ? { secure: false } : {}),
    };
  }
  return ret;
}
