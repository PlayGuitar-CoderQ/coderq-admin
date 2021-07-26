import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_utils';

export default [
  {
    url: '/getUserInfo',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body;
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
