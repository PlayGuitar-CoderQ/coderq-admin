import React, { FC, useEffect, useState } from 'react';

import { Form, Input, Button, Switch } from 'antd';
import { ReconciliationOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import IconFont from '@/components/IconFont';
import Typwriter from '@/components/Typewriter';

import { TypeWriterTextEnum, ThemeEnum } from '@/enums/appEnum';
import { useStore } from '@/hooks/setting';
import { APP_STORE } from '@/store/model/appStore';
import { updateDarkThem } from '@/logic/theme/dark';
import unUserImg from '@/assets/Page/un_user.jpg';
import './index.less';

const Login: FC = () => {
  const appStore = useStore(APP_STORE);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const checked = appStore.darkMode === ThemeEnum.LIGHT ? true : false;
    setDarkMode(checked);
  }, [appStore.darkMode]);

  // 切换主题颜色
  const toggleDarkMode = (checked: boolean) => {
    const darkMode = checked ? ThemeEnum.LIGHT : ThemeEnum.DARK;
    appStore.setDarkMode(darkMode);
    setDarkMode(checked);
    updateDarkThem(darkMode);
  };

  return (
    <div className="root-content">
      {/* 顶部打字效果 */}
      <Typwriter
        pClassName={'typewriter'}
        spanClassName={'typewriter-text'}
        spanText={TypeWriterTextEnum.FIRSTEXT}
        pText={TypeWriterTextEnum.ENDTEXT}
      />
      {/* 登录内容 */}
      <div className="login-content">
        <div className="login-form-main">
          {/* 暗黑主题开关 */}
          <Switch
            className="switch-is_dark"
            checkedChildren={<IconFont type={'icon-taiyang'} />}
            unCheckedChildren={<IconFont type={'icon-yueliang'} />}
            onChange={toggleDarkMode}
            checked={darkMode}
            defaultChecked
          />

          <img className="login-avatar" src={unUserImg} />

          <Form className="form-main">
            <Form.Item>
              <Input
                placeholder="请输入账号"
                style={{ width: '260px' }}
                suffix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item>
              <Input.Password
                placeholder="请输入密码"
                style={{ width: '260px' }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                shape="round"
                type="primary"
                icon={<ReconciliationOutlined />}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
