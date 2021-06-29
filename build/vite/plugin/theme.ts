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
