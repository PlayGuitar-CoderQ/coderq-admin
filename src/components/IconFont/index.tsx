import React, { FC } from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { Prop } from './porp';

const Icon: FC<Prop> = (props: Prop) => {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2622053_ppkynunaar.js',
  });
  return <IconFont type={props.type} style={props.style} />;
};

export default Icon;
