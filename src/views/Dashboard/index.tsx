import React, { FC, useEffect } from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { getEnv } from '@/utils/env';

const Dashboard: FC = observer(() => {
  useEffect(() => {
    console.log('env', getEnv());
  });

  const testMock = async () => {
    const data = await fetch('/login');
    console.log(123, data);
  };
  return (
    <div>
      我是首页<Button onClick={() => testMock()}>测试</Button>
    </div>
  );
});

export default Dashboard;
