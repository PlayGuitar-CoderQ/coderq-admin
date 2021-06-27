import React from 'react';
import { PartialRouteObject } from 'react-router';
import { Route } from 'react-router-dom';

import { DashboradRoute } from './dashboard';
import LoginPage from '@/views/Login';

export const LoginRoute: PartialRouteObject[] = [
  {
    path: 'login',
    element: <Route element={<LoginPage />} />,
  },
];

export const routeList = [...LoginRoute, ...DashboradRoute];
