import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import './index.less';

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import NenoFont from '@/components/NenoFont';
import { Layout, Menu, Avatar } from 'antd';
const { Sider } = Layout;

import { useStore } from '@/hooks/setting';
import { APP_STORE } from '@/store/model/appStore';
import { getAppEnvConfig } from '@/utils/env';

const MenuComponent: FC = observer(() => {
  const appStore = useStore(APP_STORE);
  const { VITE_GLOB_APP_TITLE } = getAppEnvConfig();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={appStore.collapsed}
      style={{ height: '100vh' }}
    >
      <div className="logo">
        {!appStore.collapsed ? (
          <NenoFont
            className={'animate__animated animate__bounceIn'}
            content={VITE_GLOB_APP_TITLE}
            color={'orange'}
            size={'mini'}
          />
        ) : (
          <Avatar
            className={'animate__animated animate__fadeInLeft'}
            size={45}
            src={
              'https://portrait.gitee.com/uploads/avatars/user/2698/8096010_qiu-zijian_1625647312.png!avatar30'
            }
          />
        )}
      </div>

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
