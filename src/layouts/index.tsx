import React, { FC } from 'react';
import './index.less';
import { Layout, Menu } from 'antd';
import { observer } from 'mobx-react-lite';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { useStore } from '@/hooks/setting';
import { APP_STORE } from '@/store/model/appStore';
import HeaderComponent from '@/layouts/Header';
const { Sider, Content } = Layout;

const LayoutPage: FC = observer(() => {
  const appStore = useStore(APP_STORE);
  return (
    <Layout className="layout-page">
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
});

export default LayoutPage;
