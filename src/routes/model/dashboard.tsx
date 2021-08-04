import React from 'react';
import { PartialRouteObject } from 'react-router';
import GuardRoute from '@/routes/guards';

import Layout from '@/layouts/index';
import Dashboard from '@/views/Structure';

export const DashboradRoute: PartialRouteObject = {
  path: '/',
  element: <GuardRoute element={<Layout />} />,
  children: [
    {
      path: '/structure',
      element: <GuardRoute element={<Dashboard />} />,
    },
  ],
};
