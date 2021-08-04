import React, { FC } from 'react';
import { Outlet } from 'react-router';
import './index.less';

import { Layout } from 'antd';
const { Content } = Layout;

const ContentComponent: FC = () => {
  return (
    <Content>
      <Outlet />
    </Content>
  );
};

export default ContentComponent;
