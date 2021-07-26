import { message } from 'antd';
import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_utils';

export function createFakeUserList() {
  return [
    {
      userId: '1',
      username: 'coderq',
      realName: '邱子健',
      password: '123456',
    },
  ];
}

export default [
  {
    url: '/adminLogin',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body;
      const checkUser = createFakeUserList().find((item) => {
        item.username === username && item.password === password;
      });
      if (!checkUser) {
        message.error('账号密码错误');
      }
      console.log('res', username, password);
      return resultSuccess({
        username: 'coderqadmin',
        realname: '弹吉他的CoderQ',
        avatar: 'https://urlify.cn/ueY3ia',
        auth: 'admin',
        token: 'SADAS23131454kjnkjnkjn34kj2n4kjn32k',
      });
    },
  },
] as MockMethod[];
