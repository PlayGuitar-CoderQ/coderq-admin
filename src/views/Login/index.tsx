import React, { FC, useState } from 'react';
import './index.less';

import NenoFont from '@/components/NenoFont';
import AuthoLoginIcons from './components/AuthoLoginIcons';
import SwitchDark from './components/SwitchDark';

import { observer } from 'mobx-react-lite';
import { NenoFontEnum } from '@/enums/appEnum';
import { getAppEnvConfig } from '@/utils/env';
import { useNavigate } from 'react-router-dom';

import userStore from '@/store/model/userStore';

const Login: FC = observer(() => {
  // 项目总名称
  const { VITE_GLOB_APP_TITLE } = getAppEnvConfig();
  const navigate = useNavigate();

  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // 登陆系统
  const onLogin = async () => {
    console.log(userName, password);
    try {
      const userInfo = await userStore.login({ userName, password });
      userInfo && navigate({ pathname: '/' });
      console.log('获取到的用户信息', userInfo);
    } catch (error) {
      console.error('登陆页面', error);
    }
  };

  return (
    <div className="root-content">
      <div className="login-content animate__animated animate__zoomIn">
        <div className="f_c">
          <NenoFont
            content={VITE_GLOB_APP_TITLE}
            color={NenoFontEnum.COLOR}
            size={NenoFontEnum.SIZE}
          />
        </div>

        <div className="login-form">
          <div className="input-box">
            <label htmlFor="username">用户账号</label>
            <input
              type="text"
              name="username"
              placeholder="请输入用户账号"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">用户密码</label>
            <input
              type="password"
              name="password"
              placeholder="请输入用户密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="submit"
              name="submit"
              value="登入"
              onClick={() => onLogin()}
            />
          </div>
          <AuthoLoginIcons />
        </div>
      </div>
      <div className="status-box">
        <SwitchDark />
      </div>
    </div>
  );
});

export default Login;
