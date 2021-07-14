import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import './index.less';

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

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
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  );
});

export default MenuComponent;
