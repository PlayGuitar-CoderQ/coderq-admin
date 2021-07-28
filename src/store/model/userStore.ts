import { makeAutoObservable } from 'mobx';
import { UserInfo } from '@/api/types/user.type';
import { getUserInfo } from '@/api/user';
import { useGlobSetting } from '@/hooks/setting/getEnv';

export const USER_STORE = 'userStore';

export interface UserStore {
  userInfo: UserInfo;
  token?: string;
  login: () => Promise<UserInfo>;
}

const userStore = makeAutoObservable<UserStore>({
  userInfo: {} as UserInfo,

  token: undefined,

  async login() {
    const data = await getUserInfo();
    console.log(data.token, useGlobSetting());
    return data;
  },
});

export default userStore;
