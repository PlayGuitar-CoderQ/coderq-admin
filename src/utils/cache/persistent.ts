import { TOKEN_KEY, APP_DARK_MODE_KEY_ } from '@/enums/cachEnum';

import { createLocalStorage, createSessionStorage } from '@/utils/cache';
import { DEFAULT_CACHE_TIME } from '@/settings/encryptionSetting';
import { Memory } from './memory';

interface BasicStore {
  [TOKEN_KEY]: string | number | null | undefined;
  [APP_DARK_MODE_KEY_]: 'light' | 'dark';
}

export type BasicKeys = keyof BasicStore;

// 创建两个缓存机制的存储器
const ls = createLocalStorage();
const ss = createSessionStorage();

const localMemory = new Memory(DEFAULT_CACHE_TIME);
const sessionMemory = new Memory(DEFAULT_CACHE_TIME);

// 持久性缓存
// function initPersistentMemory() {
//   const localCache = ls.get(APP_LOCAL_CACHE_KEY);
//   const sessionCache = ss.get(APP_SESSION_CACHE_KEY);
//   localCache && localMemory.resetCache(localCache);
//   sessionCache && sessionMemory.resetCache(sessionCache);
// }
