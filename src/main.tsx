import React from 'react';
import ReactDOM from 'react-dom';

import '@/utils/console'; // console窗口打印个人标志
import '@/styles/index.less';
import 'animate.css';

import { StoresProvider, stores } from '@/store';

import App from './App';

ReactDOM.render(
  <StoresProvider value={stores}>
    <App />
  </StoresProvider>,

  document.getElementById('root'),
);
