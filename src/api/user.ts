import { defHttp } from '@/utils/http/axios';
import { UserInfo } from './types/user.type';

export function login(params) {
  return defHttp.post<UserInfo>({
    url: '/adminLogin',
    params,
  });
}
