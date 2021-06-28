import React, { FC } from 'react';
import { useStore } from '@/hooks/setting';
import { observer } from 'mobx-react-lite';

const Dashboard: FC = observer(() => {
  const appStore = useStore('appStore');
  const changeSign = () => {
    appStore.setSign('mobx测试');
  };
  return (
    <div>
      我是{appStore.sign}
      <button onClick={() => changeSign()}>测试mobx修改</button>
    </div>
  );
});

export default Dashboard;
