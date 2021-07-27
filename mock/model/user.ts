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

function checkUser(username: string, password: string): boolean {
  if (username === 'coderq' && password === '123456') {
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
      const { username, password } = body;
      const isUser = checkUser(username, password);

      if (!isUser) {
        return resultError('不正确的账号和密码');
      }

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
