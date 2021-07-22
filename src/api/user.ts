import { defHttp } from '@/utils/http/axios';
import { UserInfo } from './types/user.type';

export function getUserInfo() {
  return defHttp.get<UserInfo>({
    url: '/getUserInfo',
  });
}
