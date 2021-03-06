import type { Plugin } from 'vite';

import reactRefresh from '@vitejs/plugin-react-refresh';
import { configStyleImportPlugin } from './styleImport';
import { configThemePlugin } from './theme';
import { configMockPlugin } from './mock';

export function createVitePlugin(isBuild: boolean) {
  const vitePlugin: (Plugin | Plugin[])[] = [reactRefresh()];

  vitePlugin.push(configStyleImportPlugin());

  vitePlugin.push(configThemePlugin());

  vitePlugin.push(configMockPlugin(isBuild));

  return vitePlugin;
}
