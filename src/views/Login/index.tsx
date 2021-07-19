import React, { FC, useEffect, useState } from 'react';

import { Switch } from 'antd';
import IconFont from '@/components/IconFont';
import NenoFont from '@/components/NenoFont';

import { observer } from 'mobx-react-lite';
import { ThemeEnum, NenoFontEnum } from '@/enums/appEnum';
import { useStore } from '@/hooks/setting';
import { APP_STORE } from '@/store/model/appStore';
import { updateDarkThem } from '@/logic/theme/dark';
import { getAppEnvConfig } from '@/utils/env';
import './index.less';

const Login: FC = observer(() => {
  const { VITE_GLOB_APP_TITLE } = getAppEnvConfig();
  const appStore = useStore(APP_STORE);
  const [darkMode, setDarkMode] = useState(true);
  // const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    const checked = appStore.darkMode === ThemeEnum.LIGHT ? true : false;
    setDarkMode(checked);
    console.log(
      'appStore.darkMode',
      checked,
      appStore.darkMode,
      ThemeEnum.LIGHT,
      darkMode,
    );
    // setIsTransition(true);
  }, []);

  // 切换主题颜色
  const toggleDarkMode = (checked: boolean) => {
    const darkMode = checked ? ThemeEnum.LIGHT : ThemeEnum.DARK;

    console.log(darkMode);
    appStore.setDarkMode(darkMode);
    setDarkMode(checked);
    updateDarkThem(darkMode);
  };

  return (
    <div className="root-content">
      <div className="login-content">
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
            <input type="submit" name="submit" value="登入" />
          </div>
        </div>
      </div>
      <div className="status-box">
        <Switch
          onChange={(e) => toggleDarkMode(e)}
          checked={darkMode}
          checkedChildren={<IconFont type="icon-taiyang" />}
          unCheckedChildren={<IconFont type="icon-yueliang" />}
        />
      </div>
    </div>
  );
});

export default Login;
