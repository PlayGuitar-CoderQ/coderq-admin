import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
import { createVitePlugin } from './build/vite/plugin';
import { generateModifyVars } from './build/generate/generateModifyVars';
import { createProxy } from './build/vite/proxy';
import { wrapperEnv } from './build/utils';
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PORT, VITE_PROXY } = viteEnv;

  const isBuild = command === 'build';
  return {
    plugins: createVitePlugin(isBuild),
    resolve: {
      alias: [
        {
          find: '@',
          replacement: pathResolve('src') + '/',
        },
        {
          find: '#',
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    server: {
      host: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY),
    },
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },
  };
};
