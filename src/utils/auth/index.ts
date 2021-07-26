import { TOKEN_KEY } from '@/enums/cachEnum';
import { CacheTypeEnum } from '@/enums/cachEnum';
import { BasicKeys } from '@/utils/cache/persistent';
import projectSetting from '@/settings/projectSetting';

const { permissionCacheType } = projectSetting;
const isLocal = permissionCacheType === CacheTypeEnum.LOCAL;

export function getToken() {}

//
export function getAuthCache<T>(key: BasicKeys) {
  const fn = isLocal ?
}
