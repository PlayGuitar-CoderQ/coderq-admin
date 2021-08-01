import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_utils';

import { resultError } from '../_utils';

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

function checkUser(userName: string, password: string): boolean {
  console.log('1++++', userName, password);
  if (userName === 'coderq' && password === '123456') {
    return true;
  } else {
    return false;
  }
}

export default [
  {
    url: '/coderq-api/adminLogin',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      console.log('body', body);
      const { userName, password } = body;
      const isUser = checkUser(userName, password);
      if (!isUser) {
        return resultError('不正确的账号和密码');
      }
      return resultSuccess({
        username: 'coderqadmin',
        realname: '弹吉他的CoderQ',
        avatar: 'https://z3.ax1x.com/2021/08/02/fSQVB9.jpg',
        auth: 'admin',
        token: 'SADAS23131454kjnkjnkjn34kj2n4kjn32k',
      });
    },
  },

  {
    url: '/coderq-api/getUserInfo',
    timeout: 200,
    method: 'get',
    response: () => {
      return resultSuccess({
        username: 'coderqadmin',
        realname: '弹吉他的CoderQ',
        avatar: 'https://z3.ax1x.com/2021/08/02/fSQVB9.jpg',
        auth: 'admin',
        token: 'SADAS23131454kjnkjnkjn34kj2n4kjn32k',
      });
    },
  },
] as MockMethod[];
