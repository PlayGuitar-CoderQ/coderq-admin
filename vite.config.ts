import type { UserConfig, ConfigEnv } from 'vite';
import { createVitePlugin } from './build/vite/plugin';
import { generateModifyVars } from './build/generate/generateModifyVars';
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  console.log(mode);
  return {
    plugins: createVitePlugin(isBuild),
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
