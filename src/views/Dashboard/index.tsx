import React, { FC, useEffect } from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { getEnv } from '@/utils/env';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '@/api/user';

const Dashboard: FC = observer(() => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log('env', getEnv());
  });

  const testMock = async () => {
    const res = await loginApi();
    console.log(123, res);
  };

  const onBackLogin = () => {
    navigate({ pathname: '/login' });
  };
  return (
    <div>
      我是首页<Button onClick={() => testMock()}>测试</Button>
      我是返回<Button onClick={() => onBackLogin()}>返回登陆</Button>
    </div>
  );
});

export default Dashboard;
