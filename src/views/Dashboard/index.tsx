import React, { FC } from 'react';
import { useStore } from '@/hooks/setting';
import { observer } from 'mobx-react-lite';
import { Button } from 'antd';

const Dashboard: FC = observer(() => {
  const appStore = useStore('appStore');
  const changeSign = () => {
    appStore.setSign('mobx测试');
    console.log('dark', appStore.darkMode, appStore.sign);
  };
  const textStart = () => {}
}
  return (
    <div>
      我是{appStore.sign}
      <Button type="primary" shape="round" onClick={() => changeSign()}>
        测试mobx修改
      </Button>
    </div>
  );
});

export default Dashboard;
