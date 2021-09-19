import React from 'react';
import GuardRoute from '@/routes/guards';
import type { PartialRouteObject } from 'react-router';

import Layout from '@/layouts/index';
import Dashboard from '@/views/Structure';
import PunchInRecord from '@/views/PunchInRecord';
import ErrorPage from '@/views/RequestPage/404';

export const DashboradRoute: PartialRouteObject = {
  path: '/',
  element: <GuardRoute element={<Layout />} />,
  children: [
    {
      path: '/structure',
      element: (
        <GuardRoute
          element={<Dashboard />}
          title="项目规划板块"
          icon="icon-jiagouzixun_huaban"
        />
      ),
    },
    {
      path: '/punchInRecord',
      element: (
        <GuardRoute
          element={<PunchInRecord />}
          title="打卡记录"
          icon="icon-jiagouzixun_huaban"
        />
      ),
    },
    {
      path: '/404',
      element: (
        <GuardRoute
          element={<ErrorPage />}
          title="测试404页面"
          icon="icon-jiagouzixun_huaban"
        />
      ),
    },
  ],
};
