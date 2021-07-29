import { makeAutoObservable } from 'mobx';
import { UserInfo } from '@/api/types/user.type';
import { loginApi } from '@/api/user';
import { LoginParams } from '@/api/types/user.type';
import { TOKEN_KEY } from '@/enums/cachEnum';
import { createLocalStorage } from '@/utils/cache';
const ls = createLocalStorage();

export const USER_STORE = 'userStore';

export interface UserStore {
  userInfo: UserInfo;
  token?: string;
  setToken: (token: string) => void;
  login: (params: LoginParams) => Promise<UserInfo | null>;
}

const userStore = makeAutoObservable<UserStore>({
  userInfo: {} as UserInfo,

  token: undefined,

  setToken(token: string) {
    this.token = token;
  },

  async login(params: LoginParams): Promise<UserInfo | null> {
    try {
      const data = await loginApi(params);
      const { token } = data;
      this.setToken(token);
      console.log(this.token);
      ls.set(TOKEN_KEY, token);
      return data;
    } catch (error) {
      console.log('账号密码错误');
      return Promise.reject(error);
    }
  },
});

export default userStore;
