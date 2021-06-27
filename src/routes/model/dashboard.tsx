import React from 'react';
import { Route } from 'react-router-dom';
import { PartialRouteObject } from 'react-router';
import Dashboard from '@/views/Dashboard';

export const DashboradRoute: PartialRouteObject[] = [
  {
    path: '/',
    element: <Route element={<Dashboard />} />,
  },
];
