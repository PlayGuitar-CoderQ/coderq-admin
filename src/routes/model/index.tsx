import React from 'react';
import type { PartialRouteObject } from 'react-router';
import type { MenuItem } from '../type';

import { DashboradRoute } from './dashboard';
import LoginPage from '@/views/Login';
import GuardRoute from '@/routes/guards';

export const LoginRoute: PartialRouteObject = {
  path: 'login',
  element: <GuardRoute element={<LoginPage />} />,
};

export const routeList = [LoginRoute, DashboradRoute] as MenuItem[];
