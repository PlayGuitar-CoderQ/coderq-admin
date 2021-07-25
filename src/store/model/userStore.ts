import { makeAutoObservable } from 'mobx';
import { UserInfo } from '@/api/types/user.type';

export const USER_STORE = 'userStore';

export interface UserStore {
  userInfo: UserInfo;
  token?: string;
}

const userStore = makeAutoObservable<UserStore>({
  userInfo: {} as UserInfo,
  token: undefined,
});

export default userStore;
