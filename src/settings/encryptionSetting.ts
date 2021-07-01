import { isProdMode } from '@/utils/env';

// 系统的默认缓存时间
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

// AES 加密秘钥
export const cacheCipher = {
  key: '_11111000001111@',
  iv: '@11111000001111_',
};

// 是否使用AES对系统缓存加密
export const enableStorageEncryption = isProdMode();
