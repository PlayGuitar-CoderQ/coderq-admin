import React, { FC } from 'react';

import { Form, Input, Button, Switch } from 'antd';
import { ReconciliationOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import IconFont from '@/components/IconFont';
import Typwriter from '@/components/Typewriter';

import { TypeWriterTextEnum } from '@/enums/appEnum';
import unUserImg from '@/assets/Page/un_user.jpg';
import './index.less';

const Login: FC = () => {
  return (
    <div className="content">
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
