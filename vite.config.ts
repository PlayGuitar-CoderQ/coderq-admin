import type { UserConfig, ConfigEnv } from 'vite';
import { createVitePlugin } from './build/vite/plugin';
import { generateModifyVars } from './build/generate/generateModifyVars';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  console.log(mode);
  return {
    plugins: createVitePlugin(isBuild),
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },
    // 项目启动自动打开
    server: {
      open: '/',
    },
  };
};
