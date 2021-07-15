import React, { FC } from 'react';

import { observer } from 'mobx-react-lite';

import { APP_STORE } from '@/store/model/appStore';
import { useStore } from '@/hooks/setting';

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const CollasedIcon: FC = observer(() => {
  const appStore = useStore(APP_STORE);

  const onSetCollapsed = () => {
    appStore.setCollapsed(!appStore.collapsed);
  };
  return (
    <>
      {React.createElement(
        appStore.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: 'trigger',
          onClick: onSetCollapsed,
        },
      )}
    </>
  );
});

export default CollasedIcon;
