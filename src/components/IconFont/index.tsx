import React, { FC } from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { Prop } from './prop';

const Icon: FC<Prop> = (props: Prop) => {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2622053_m4139rs6k3q.js',
  });
  return <IconFont type={props.type} style={props.style} />;
};

export default Icon;
