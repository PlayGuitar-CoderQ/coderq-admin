import type { FC } from 'react';
import React from 'react';
import './index.less';

export interface NenoFontProps {
  content: string;
  color?: string;
  size?: string;
}

const NenoFont: FC<NenoFontProps> = ({
  content,
  color = 'blue',
  size = 'samll',
}) => {
  return <a className={`neno-${color} neno-${size}`}>{content}</a>;
};

export default NenoFont;
