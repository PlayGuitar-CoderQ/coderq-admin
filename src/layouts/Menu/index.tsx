import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import './index.less';

import IconFont from '@/components/IconFont';
import LeftTopLogo from './components/LeftTopLogo';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { Item } = Menu;

import { useStore } from '@/hooks/setting';
import { APP_STORE } from '@/store/model/appStore';
import { routeList } from '@/routes/model';

const MenuComponent: FC = observer(() => {
  const navigate = useNavigate();
  const appStore = useStore(APP_STORE);

  const onMenuTrigger = (path?: string) => {
    navigate({ pathname: path });
    console.log(path);
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={appStore.collapsed}
      style={{ height: '100vh' }}
    >
      <LeftTopLogo />

      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {routeList[1].children!.map((item, index) => {
          return (
            <Item
              onClick={() => onMenuTrigger(item.path)}
              key={index}
              icon={
                <IconFont
                  type={item.element.props.icon!}
                  style={{ fontSize: '20px' }}
                />
              }
            >
              {item.element.props.title}
            </Item>
          );
        })}
      </Menu>
    </Sider>
  );
});

export default MenuComponent;
