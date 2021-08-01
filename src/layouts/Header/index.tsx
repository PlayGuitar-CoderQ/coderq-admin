import React from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.less';

import { observer } from 'mobx-react-lite';
import { createLocalStorage } from '@/utils/cache';

import { Layout, Avatar } from 'antd';
import CollasedIcon from './components/CollapsedIcon';
import IconFont from '@/components/IconFont';

import userStore from '@/store/model/userStore';

const { Header } = Layout;

const HeaderComponents: FC = observer(() => {
  const ls = createLocalStorage();
  const navigate = useNavigate();
  const { userInfo } = userStore;

  const loginOut = () => {
    ls.clear();
    navigate({ pathname: '/login' });
  };
  return (
    <Header style={{ padding: '0 0 0 15px', background: '#fff' }}>
      <div className="f_b header-content">
        <CollasedIcon />
        <div className="f_c">
          <Avatar src={userInfo.avatar} style={{ marginRight: '20px' }} />
          <IconFont
            onClick={() => loginOut()}
            type={'icon-tuichu'}
            style={{ fontSize: '40px', cursor: 'pointer' }}
          />
        </div>
      </div>
    </Header>
  );
});

export default HeaderComponents;
