import React, { FC, useState } from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '@/api/user';
import { Animated } from 'react-animated-css';
import './index.less';

const Dashboard: FC = observer(() => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const testMock = async () => {
    const res = await loginApi();
    console.log(123, res);
  };

  const onBackLogin = () => {
    navigate({ pathname: '/login' });
  };
  return (
    <div>
      <Button onClick={() => testMock()}>测试</Button>
      <Button onClick={() => onBackLogin()}>返回登陆</Button>
      <Button onClick={() => setShow(!show)}>测试动画</Button>
      {show && (
        <Animated
          animationIn="fadeInDown"
          animationOut="bounceOut"
          isVisible={true}
        >
          <Button className="test">我是动画</Button>
        </Animated>
      )}
    </div>
  );
});

export default Dashboard;
