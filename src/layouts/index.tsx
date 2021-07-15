import React, { FC } from 'react';
import './index.less';
import { Layout } from 'antd';

import HeaderComponent from './Header';
import MenuComponent from './Menu';
import ContentComponent from './Contents';

const LayoutPage: FC = () => {
  return (
    <Layout className="layout-page">
      <MenuComponent />
      <Layout>
        <HeaderComponent />
        <ContentComponent />
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
