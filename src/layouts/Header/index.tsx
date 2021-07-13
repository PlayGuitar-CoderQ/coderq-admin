import React from 'react';
import type { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
const { Header } = Layout;

import { useStore } from '@/hooks/setting';
import { APP_STORE } from '@/store/model/appStore';

const HeaderComponents: FC = observer(() => {
  const appStore = useStore(APP_STORE);

  const onSetCollapsed = () => {
    appStore.setCollapsed(!appStore.collapsed);
    console.log('appStore.collapsed', appStore.collapsed);
  };
  return (
    <Header style={{ paddingLeft: '20px', background: '#fff' }}>
      {React.createElement(
        appStore.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: 'trigger',
          onClick: onSetCollapsed,
        },
      )}
    </Header>
  );
});

export default HeaderComponents;
