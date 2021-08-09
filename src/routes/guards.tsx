import type { FC } from 'react';
import React from 'react';

import { Navigate, Route, useLocation } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { createLocalStorage } from '@/utils/cache';
import { TOKEN_KEY } from '@/enums/cachEnum';
import { isNull } from '@/utils/is';
const ls = createLocalStorage();

const whiteList = ['/login'];

const checkWhiteList = (pathName = ''): boolean => {
  return whiteList.some((item) => item === pathName);
};

export interface RouteNewProps extends RouteProps {
  title?: string;
  icon?: string;
}

const GuardRoute: FC<RouteNewProps> = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const token = ls.get(TOKEN_KEY);

  if (!isNull(token)) {
    if (pathname === '/login') {
      return <Navigate to="/" />;
    } else {
      return <Route {...props} />;
    }
  } else {
    if (checkWhiteList(pathname)) {
      return <Route {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  }
};

export default GuardRoute;
