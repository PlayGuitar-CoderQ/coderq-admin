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
        password: '123456',
        sex: 0,
        auth: 'admin',
      });
    },
  },
] as MockMethod[];
