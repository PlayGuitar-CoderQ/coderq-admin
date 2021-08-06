import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import './index.less';

import IconFont from '@/components/IconFont';
import LeftTopLogo from './components/LeftTopLogo';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { Item } = Menu;

import { useStore } from '@/hooks/setting';
import { APP_STORE } from '@/store/model/appStore';

const MenuComponent: FC = observer(() => {
  const appStore = useStore(APP_STORE);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={appStore.collapsed}
      style={{ height: '100vh' }}
    >
      <LeftTopLogo />

      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Item
          key="1"
          icon={
            <IconFont
              type="icon-jiagouzixun_huaban"
              style={{ fontSize: '20px' }}
            />
          }
        >
          项目规划板块
        </Item>
      </Menu>
    </Sider>
  );
});

export default MenuComponent;
