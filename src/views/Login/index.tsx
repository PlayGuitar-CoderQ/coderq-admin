import React, { FC, useEffect, useState } from 'react';

import { Switch } from 'antd';
// import { ReconciliationOutlined } from '@ant-design/icons';
// import { UserOutlined } from '@ant-design/icons';
import IconFont from '@/components/IconFont';
// import Typwriter from '@/components/Typewriter';
// import { CSSTransition } from 'react-transition-group';

import { ThemeEnum } from '@/enums/appEnum';
import { useStore } from '@/hooks/setting';
import { APP_STORE } from '@/store/model/appStore';
import { updateDarkThem } from '@/logic/theme/dark';
import { observer } from 'mobx-react-lite';
// import unUserImg from '@/assets/Page/un_user.jpg';
import './index.less';

const Login: FC = observer(() => {
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
  }, [darkMode]);

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
          defaultChecked={darkMode}
          checkedChildren={<IconFont type="icon-taiyang" />}
          unCheckedChildren={<IconFont type="icon-yueliang" />}
        />
      </div>
    </div>
  );
});

export default Login;
