import type { GlobEnvConfg } from '#/config';
import { getConfigFileName } from '../../build/getConfigFileName';
import pkg from '../../package.json';

/**
 * @description 获取当前环境模式
 * @returns 'development' | 'production'
 */
export function getEnv(): string {
  return import.meta.env.MODE;
}

// 是否开发环境
export function isDevMode(): boolean {
  return import.meta.env.DEV;
}

// 是否生产环境
export function isProdMode(): boolean {
  return import.meta.env.PROD;
}

// 获取缓存的前缀名称
export function getStorageShortName() {
  return `${getCommonStoragePrefix()}${`__${pkg.version}`}__`.toUpperCase();
}

export function getCommonStoragePrefix() {
  const { VITE_GLOB_APP_SHORT_NAME } = getAppEnvConfig();
  return `${VITE_GLOB_APP_SHORT_NAME}__${getEnv()}`.toUpperCase();
}

export function getAppEnvConfig() {
  const ENV_NAME = getConfigFileName(import.meta.env);

  const ENV = (import.meta.env.DEV
    ? (import.meta.env as unknown as GlobEnvConfg)
    : window[ENV_NAME as any]) as unknown as GlobEnvConfg;

  const { VITE_GLOB_APP_SHORT_NAME, VITE_GLOB_APP_TITLE } = ENV;

  return {
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_APP_TITLE,
  };
}
