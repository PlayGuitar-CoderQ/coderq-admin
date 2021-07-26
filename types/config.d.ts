import { CacheTypeEnum } from '@/enums/cachEnum';

// 全局环境变量类型
export interface GlobEnvConfg {
  // 项目名称
  VITE_GLOB_APP_TITLE: string;

  // 项目名称缓存前缀
  VITE_GLOB_APP_SHORT_NAME: string;

  // 服务接口url前缀
  VITE_GLOB_API_URL_PREFIX?: string;

  // 接口地址
  VITE_GLOB_API_URL: string;
}

export interface GlobConfig {
  // 项目title
  title: string;
  // 项目前缀名称
  shortName: string;
  // 服务接口url前缀
  urlPrefix?: string;
  // 接口地址
  apiUrl: string;
}

// 项目配置
export interface ProjectConfig {
  // 权限相关信息的储存位置位置 1 | 0
  permissionCacheType: CacheTypeEnum;
}
