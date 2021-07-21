import { makeAutoObservable } from 'mobx';
import { UserInfo } from '@/api/types/user.type';
import { loginApi } from '@/api/user';

export interface UserStore {
  userInfo: UserInfo;
  login: () => void;
}

const userStore = makeAutoObservable<UserStore>({
  userInfo: {} as UserInfo,

  async login() {
    const data = await loginApi();
    this.userInfo = data;
    console.log(data);
  },
});

export default userStore;
