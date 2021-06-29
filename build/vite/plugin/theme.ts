/**
 * @description 切换黑暗主题vite插件
 * @author CoderQ
 */
import type { Plugin } from 'vite';
import path from 'path';

import {
  viteThemePlugin,
  antdDarkThemePlugin,
  mixLighten,
  mixDarken,
  tinycolor,
} from 'vite-plugin-theme';

import { getThemeColors, generateColors } from '../../config/themeConfig';
import { generateModifyVars } from '../../generate/generateModifyVars';

export function configThemePlugin(): Plugin[] {
  const colors = generateColors({
    mixDarken,
    mixLighten,
    tinycolor,
  });
  const plugin = [
    viteThemePlugin({
      colorVariables: [...getThemeColors(), ...colors],
    }),
    antdDarkThemePlugin({
      preloadFiles: [
        path.resolve(process.cwd(), 'node_modules/antd/dist/antd.less'),
        path.resolve(process.cwd(), 'src/design/index.less'),
      ],
      filter: () => true,

      darkModifyVars: {
        ...generateModifyVars(true),
        'text-color': '#c9d1d9',
        'text-color-base': '#c9d1d9',
        'component-background': '#151515',
        // black: '#0e1117',
        // #8b949e
        'text-color-secondary': '#8b949e',
        'border-color-base': '#303030',
        // 'border-color-split': '#30363d',
        'item-active-bg': '#111b26',
        'app-content-background': 'rgb(255 255 255 / 4%)',
      },
    }),
  ];

  return plugin as unknown as Plugin[];
}
