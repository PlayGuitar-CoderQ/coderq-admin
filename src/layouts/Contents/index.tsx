import React, { FC } from 'react';
import './index.less';

import { Layout } from 'antd';
const { Content } = Layout;

const ContentComponent: FC = () => {
  return <Content className="layout-content ">content</Content>;
};

export default ContentComponent;
