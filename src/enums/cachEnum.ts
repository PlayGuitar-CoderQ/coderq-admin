// 缓存当前主题模式
export const APP_DARK_MODE_KEY_ = '__APP__DARK__MODE__';

// 登陆Token
export const TOKEN_KEY = 'TOKEN__';

// 用户信息
export const USER_INFO = 'USER_INFO__';

// 采用缓存枚举
export enum CacheTypeEnum {
  SESSION, // 0 seesiontstorege缓存机制
  LOCAL, // 1 localstorege缓存机制
}
