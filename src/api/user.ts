import { defHttp } from '@/utils/http/axios';
import { UserInfo } from './types/user.type';

export function loginApi() {
  return defHttp.get<UserInfo>({
    url: '/login',
  });
}
