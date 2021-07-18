import React, { FC, useEffect, useState } from 'react';

// import { Form, Input, Button, Switch } from 'antd';
// import { ReconciliationOutlined } from '@ant-design/icons';
// import { UserOutlined } from '@ant-design/icons';
// import IconFont from '@/components/IconFont';
// import Typwriter from '@/components/Typewriter';
// import { CSSTransition } from 'react-transition-group';

// import { TypeWriterTextEnum, ThemeEnum } from '@/enums/appEnum';
// import { useStore } from '@/hooks/setting';
// import { APP_STORE } from '@/store/model/appStore';
// import { updateDarkThem } from '@/logic/theme/dark';
// import unUserImg from '@/assets/Page/un_user.jpg';
import './index.less';

const Login: FC = () => {
  // const appStore = useStore(APP_STORE);
  // const [darkMode, setDarkMode] = useState(false);
  // const [isTransition, setIsTransition] = useState(false);

  // useEffect(() => {
  //   const checked = appStore.darkMode === ThemeEnum.LIGHT ? true : false;
  //   setDarkMode(checked);
  //   setIsTransition(true);
  // }, []);

  // 切换主题颜色
  // const toggleDarkMode = (checked: boolean) => {
  //   const darkMode = checked ? ThemeEnum.LIGHT : ThemeEnum.DARK;
  //   appStore.setDarkMode(darkMode);
  //   setDarkMode(checked);
  //   updateDarkThem(darkMode);
  // };

  return <div className="root-content"></div>;
};

export default Login;
