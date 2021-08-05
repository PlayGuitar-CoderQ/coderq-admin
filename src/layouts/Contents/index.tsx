import React, { FC } from 'react';
import { Outlet } from 'react-router';
import './index.less';

import { Layout } from 'antd';
const { Content } = Layout;

const ContentComponent: FC = () => {
  return (
    <Content style={{ border: '1px solid red' }}>
      <Outlet />
    </Content>
  );
};

export default ContentComponent;
