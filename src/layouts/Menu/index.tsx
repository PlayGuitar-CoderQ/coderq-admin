import type { FC } from 'react';

import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const [keyIndex, setKeyIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const appStore = useStore(APP_STORE);

  useEffect(() => {
    const index = routeList[1].children?.findIndex((item) => {
      console.log(item.path, pathname);
      return item.path === pathname;
    });
    setKeyIndex(index);
    console.log('index', index);
  });

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

      <Menu theme="dark" mode="inline" defaultSelectedKeys={[`${keyIndex}`]}>
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
