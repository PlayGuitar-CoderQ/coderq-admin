export interface UserInfo {
  username: string;
  realname: string;
  avatar: string;
  auth: string;
  token: string;
  password: string;
}

export interface LoginParams {
  userName: string;
  password: string;
}
