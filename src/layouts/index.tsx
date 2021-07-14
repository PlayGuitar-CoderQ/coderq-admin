import React, { FC } from 'react';
import './index.less';
import { Layout } from 'antd';

import HeaderComponent from './Header';
import MenuComponent from './Menu';
const { Content } = Layout;

const LayoutPage: FC = () => {
  return (
    <Layout className="layout-page">
      <MenuComponent />
      <Layout>
        <HeaderComponent />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          content
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
