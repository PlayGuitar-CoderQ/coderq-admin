import React from 'react';
import { Route } from 'react-router-dom';
import { PartialRouteObject } from 'react-router';
import GuardRoute from '@/routes/guards';

// 测试layout 暂时借用
import Layout from '@/layouts/index';

export const DashboradRoute: PartialRouteObject = {
  path: '/',
  element: <GuardRoute element={<Layout />} />,
};
