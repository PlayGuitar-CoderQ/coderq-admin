import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

const modules = import.meta.globEager('./**/*.ts');

const mockModules: any[] = [];
Object.keys(modules).forEach((key) => {
  // 去除私有的方法
  if (key.includes('/_')) {
    return;
  }
  mockModules.push(...modules[key].default);
});

/**
 * 在生成环境使用需要手动导入所以模块
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
