import type { ProjectConfig } from '#/config';
import { CacheTypeEnum } from '@/enums/cachEnum';

// ⚠️如果有字段改动等等，您需要在更改之后清除浏览器缓存⚠️
const setting: ProjectConfig = {
  // 权限相关的缓存存储在 sessionStorage 或 localStorage
  permissionCacheType: CacheTypeEnum.LOCAL,
};

export default setting;
