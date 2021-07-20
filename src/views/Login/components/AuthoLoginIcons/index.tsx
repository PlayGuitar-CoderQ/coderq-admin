import type { FC } from 'react';
import React from 'react';
import './index.less';

import IconFont from '@/components/IconFont';

import { IconList } from './data';

const AuthoLoginIcons: FC = () => {
  return (
    <div className="icon-content">
      {IconList.map((name, index) => {
        return (
          <IconFont
            type={name}
            style={{
              fontSize: '25px',
              marginRight: '12px',
              cursor: 'pointer',
            }}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default AuthoLoginIcons;
