import React from 'react';
import { Route } from 'react-router-dom';
import { PartialRouteObject } from 'react-router';
// import Dashboard from '@/views/Dashboard';

// 测试layout 暂时借用
import Layout from '@/layouts/index';

export const DashboradRoute: PartialRouteObject[] = [
  {
    path: '/',
    element: <Route element={<Layout />} />,
  },
];
