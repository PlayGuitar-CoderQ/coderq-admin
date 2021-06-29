import type { UserConfig, ConfigEnv } from 'vite';
import { createVitePlugin } from './build/vite/plugin';
import { generateModifyVars } from './build/generate/generateModifyVars';
import { resolve } from 'path';

import { configThemePlugin } from './build/vite/plugin/theme';
console.log('generateColors', configThemePlugin());

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  console.log('viteConfig', isBuild, mode);
  return {
    plugins: createVitePlugin(),
    resolve: {
      alias: [
        {
          find: '@',
          replacement: pathResolve('src') + '/',
        },
      ],
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
