import React from 'react';
import { PartialRouteObject } from 'react-router';

import { DashboradRoute } from './dashboard';
import LoginPage from '@/views/Login';
import GuardRoute from '@/routes/guards';

export const LoginRoute: PartialRouteObject = {
  path: 'login',
  element: <GuardRoute element={<LoginPage />} />,
};

export const routeList = [LoginRoute, DashboradRoute];
