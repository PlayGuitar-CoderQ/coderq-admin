import { defHttp } from '@/utils/http/axios';
import { LoginResult } from './types/user.type';

export function loginApi() {
  return defHttp.get<LoginResult>({
    url: '/login',
  });
}
