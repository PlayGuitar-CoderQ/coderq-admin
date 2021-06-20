import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.less';

const Login: FC = () => {
  return (
    <div className="content">
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
