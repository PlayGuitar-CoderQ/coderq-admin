import React, { FC } from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { IconFontUrl } from '@/enums/appEnum';
import { Prop } from './prop';

const Icon: FC<Prop> = (props: Prop) => {
  const IconFont = createFromIconfontCN({
    scriptUrl: IconFontUrl.ICONURL,
  });
  return (
    <IconFont type={props.type} style={props.style} onClick={props.onClick} />
  );
};

export default Icon;
