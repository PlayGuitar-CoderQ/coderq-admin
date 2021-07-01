/**
 * @description 获取生产环境的缓存前缀名称
 * @param env 环境变量对象
 */
export const getConfigFileName = (env: Record<string, any>) => {
  return `__PRODUCTION__${env.VITE_GLOBE_APP_SHORT_NAME || '__APP'}__CINF__`
    .toUpperCase()
    .replace(/\s/g, '');
};
