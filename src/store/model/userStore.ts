import { makeAutoObservable } from 'mobx';
import { UserInfo } from '@/api/types/user.type';
import { loginApi } from '@/api/user';
import { LoginParams } from '@/api/types/user.type';
import { TOKEN_KEY, USER_INFO } from '@/enums/cachEnum';
import { createLocalStorage } from '@/utils/cache';
const ls = createLocalStorage();

export const USER_STORE = 'userStore';

export interface UserStore {
  userInfo: UserInfo;
  token?: string;
  setToken: (token: string) => void;
  setUserInfo: (data: UserInfo) => void;
  login: (params: LoginParams) => Promise<UserInfo | null>;
}

const userStore = makeAutoObservable<UserStore>({
  userInfo: ls.get(USER_INFO),

  token: undefined,

  setToken(token: string) {
    this.token = token;
  },

  setUserInfo(data: UserInfo) {
    this.userInfo = data;
  },

  async login(params: LoginParams): Promise<UserInfo | null> {
    try {
      const data = await loginApi(params);
      const { token } = data;
      this.setToken(token);
      this.setUserInfo(data);
      ls.set(TOKEN_KEY, token);
      ls.set(USER_INFO, data);
      return data;
    } catch (error) {
      console.log('账号密码错误');
      return Promise.reject(error);
    }
  },
});

export default userStore;
