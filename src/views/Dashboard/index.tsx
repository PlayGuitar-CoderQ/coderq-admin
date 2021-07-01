import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { getEnv } from '@/utils/env';

const Dashboard: FC = observer(() => {
  useEffect(() => {
    console.log('env', getEnv());
  });
  return <div>我是首页</div>;
});

export default Dashboard;
