import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import './index.less';

import { UserOutlined } from '@ant-design/icons';
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
        <Item key="1" icon={<UserOutlined />}>
          项目规划板块
        </Item>
      </Menu>
    </Sider>
  );
});

export default MenuComponent;
