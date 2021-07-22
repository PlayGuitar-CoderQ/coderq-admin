import React from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.less';

import { observer } from 'mobx-react-lite';

import { Layout } from 'antd';
import CollasedIcon from './components/CollapsedIcon';
import IconFont from '@/components/IconFont';

const { Header } = Layout;

const HeaderComponents: FC = observer(() => {
  const navigate = useNavigate();

  const loginOut = () => {
    navigate({ pathname: '/login' });
  };
  return (
    <Header style={{ padding: '0 0 0 15px', background: '#fff' }}>
      <div className="f_b header-content">
        <CollasedIcon />
        <IconFont
          onClick={() => loginOut()}
          type={'icon-tuichu'}
          style={{ fontSize: '40px', cursor: 'pointer' }}
        />
      </div>
    </Header>
  );
});

export default HeaderComponents;
