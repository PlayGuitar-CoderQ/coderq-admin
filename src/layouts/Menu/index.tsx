import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation, useNavigate } from 'react-router-dom';
import { PartialRouteObject } from 'react-router';
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
  const { pathname } = useLocation();
  const appStore = useStore(APP_STORE);

  useEffect(() => {
    onMenuTrigger();
  }, []);

  const onMenuTrigger = (path: string) => {
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
        {routeList[1]?.children?.map((item, index) => {
          return (
            <Item
              onClick={() => onMenuTrigger(item.path)}
              key={index}
              icon={
                <IconFont
                  type={item.element.props.icon}
                  style={{ fontSize: '20px' }}
                />
              }
            >
              {item.element.props.title}
            </Item>
          );
        })}
        {/* {routeList[1]?.children?.map((route, index) => {
          <Item
            key={index}
            icon={
              <IconFont
                type={route.element.props.icon}
                style={{ fontSize: '20px' }}
              />
            }
          >
            {route.element.props.title}
          </Item>;
        })} */}
        {/* <Item
          key="1"
          icon={
            <IconFont
              type="icon-jiagouzixun_huaban"
              style={{ fontSize: '20px' }}
            />
          }
        >
          项目规划板块
        </Item> */}
        {/* <Item
          onClick={(e: any) => onMenuTrigger(e)}
          key="2"
          icon={
            <IconFont
              type="icon-jiagouzixun_huaban"
              style={{ fontSize: '20px' }}
            />
          }
        >
          测试404页面
        </Item> */}
      </Menu>
    </Sider>
  );
});

export default MenuComponent;
