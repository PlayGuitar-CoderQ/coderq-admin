import type { FC } from 'react';
import React from 'react';
import './index.less';

import NenoFont from '@/components/NenoFont';
import { Avatar } from 'antd';

import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/setting';
import { APP_STORE } from '@/store/model/appStore';
import { getAppEnvConfig } from '@/utils/env';

const LeftTopLogo: FC = observer(() => {
  const appStore = useStore(APP_STORE);
  const { VITE_GLOB_APP_TITLE } = getAppEnvConfig();

  return (
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
  );
});

export default LeftTopLogo;
