import React, { FC, useEffect } from 'react';
import './index.less';
import { Layout } from 'antd';

import { useNavigate, useLocation } from 'react-router-dom';

import HeaderComponent from './Header';
import MenuComponent from './Menu';
import ContentComponent from './Contents';

const LayoutPage: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/structure');
    }
  }, [navigate, location]);

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
