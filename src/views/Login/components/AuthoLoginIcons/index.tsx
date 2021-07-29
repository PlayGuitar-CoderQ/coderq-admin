/**
 * @description 登陆界面下的第三方登陆图标组件
 * @author CoderQ
 * tip: 可以根据需要前往阿里图标库配置自己项目的图标引入链接后，在配套的data.ts里写入需要显示的图标
 */

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
