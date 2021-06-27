import type { Plugin } from 'vite';

import reactRefresh from '@vitejs/plugin-react-refresh';
import { configStyleImportPlugin } from './styleImport';

export function createVitePlugin(isBuild: boolean) {
  const vitePlugin: (Plugin | Plugin[])[] = [reactRefresh()];

  vitePlugin.push(configStyleImportPlugin(isBuild));

  return vitePlugin;
}
