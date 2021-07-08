import { useContext } from 'react';
import { stores, storeContext } from '@/store';
import type { GlobConfig } from '#/config';
import { getAppEnvConfig } from '@/utils/env';

export const useStores = () => useContext(storeContext);

export const useStore = <T extends keyof typeof stores>(
  store: T,
): typeof stores[T] => useContext(storeContext)[store];

export const useGlobSetting = (): Readonly<GlobConfig> => {
  const {
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_API_URL,
  } = getAppEnvConfig();

  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
    apiUrl: VITE_GLOB_API_URL,
  };
  console.log('glob', glob);
  return glob as Readonly<GlobConfig>;
};
