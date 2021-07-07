import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoresProvider, stores } from '@/store';

import '@/utils/console'; // console窗口打印个人标志
import '@/styles/index.less';

ReactDOM.render(
  <StoresProvider value={stores}>
    <App />
  </StoresProvider>,

  document.getElementById('root'),
);
