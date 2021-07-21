import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_utils';

export default [
  {
    url: '/login',
    timeout: 200,
    method: 'get',
    response: () => {
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
