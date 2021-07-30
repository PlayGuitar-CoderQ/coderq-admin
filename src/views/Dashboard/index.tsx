import React, { FC, useState } from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './index.less';

const Dashboard: FC = observer(() => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const testMock = async () => {
    console.log(123);
  };

  const onBackLogin = () => {
    navigate({ pathname: '/login' });
  };
  return (
    <div>
      <Button onClick={() => testMock()}>测试</Button>
      <Button onClick={() => onBackLogin()}>返回登陆</Button>
      <Button onClick={() => setShow(!show)}>测试动画</Button>
      <div className="content">
        <CSSTransition
          in={show}
          timeout={800}
          classNames={{
            enter: 'animate__animated',
            enterActive: 'animate__backInLeft',
            exit: 'animate__animated',
            exitActive: 'animate__backOutDown',
          }}
          unmountOnExit
        >
          <h1>我是好</h1>
        </CSSTransition>
      </div>
    </div>
  );
});

export default Dashboard;
