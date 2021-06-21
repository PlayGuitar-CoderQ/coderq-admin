import React, { FC } from 'react';
import { Form, Input, Button, Switch } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import IconFont from '@/components/IconFont';
import './index.less';

const Login: FC = () => {
  return (
    <div className="content">
      <Switch
        className="switch-is_dark"
        checkedChildren={<IconFont type={'icon-taiyang'} />}
        unCheckedChildren={<IconFont type={'icon-yueliang'} />}
        defaultChecked
      />
      <div className="login-content">
        <div className="login-form-main">
          <img
            className="login-avatar"
            src="https://avatars.githubusercontent.com/u/55419399?v=4"
            alt=""
          />

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
              <Button type="primary">登录</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
