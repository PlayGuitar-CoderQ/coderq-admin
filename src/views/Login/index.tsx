import React, { FC, useEffect, useState, useRef } from 'react';

import { Switch } from 'antd';
import IconFont from '@/components/IconFont';
import NenoFont from '@/components/NenoFont';
import AuthoLoginIcons from './components/AuthoLoginIcons';

import { observer } from 'mobx-react-lite';
import { ThemeEnum, NenoFontEnum } from '@/enums/appEnum';
import { useStore } from '@/hooks/setting';
import { APP_STORE } from '@/store/model/appStore';
// import { USER_STORE } from '@/store/model/userStore';
import { updateDarkThem } from '@/logic/theme/dark';
import { getAppEnvConfig } from '@/utils/env';
import { login } from '@/api/user';
import './index.less';

import { TOKEN_KEY } from '@/enums/cachEnum';
import { createLocalStorage } from '@/utils/cache';
const ls = createLocalStorage();

const Login: FC = observer(() => {
  const usernameElement = useRef();
  const passwordElement = useRef();
  const { VITE_GLOB_APP_TITLE } = getAppEnvConfig();
  const appStore = useStore(APP_STORE);
  // const userStore = useStore(USER_STORE);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const checked = appStore.darkMode === ThemeEnum.LIGHT ? true : false;
    setDarkMode(checked);
  }, []);

  // 切换主题颜色
  const onToggleDarkMode = (checked: boolean) => {
    const darkMode = checked ? ThemeEnum.LIGHT : ThemeEnum.DARK;
    appStore.setDarkMode(darkMode);
    setDarkMode(checked);
    updateDarkThem(darkMode);
  };

  // 登陆系统
  const onLogin = async () => {
    login({ username: 'coderq', password: '123456' })
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('err', err);
      });
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
            <input type="text" name="username" placeholder="请输入用户账号" />
          </div>
          <div className="input-box">
            <label htmlFor="password">用户密码</label>
            <input
              type="password"
              name="password"
              placeholder="请输入用户密码"
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
        <Switch
          onChange={(e) => onToggleDarkMode(e)}
          checked={darkMode}
          checkedChildren={<IconFont type="icon-taiyang" />}
          unCheckedChildren={<IconFont type="icon-yueliang" />}
        />
      </div>
    </div>
  );
});

export default Login;
