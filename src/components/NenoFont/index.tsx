import type { FC } from 'react';
import React from 'react';
import './index.less';

export interface NenoFontProps {
  content: string;
  color?: string;
  size?: string;
  className?: string;
}

const NenoFont: FC<NenoFontProps> = ({
  content,
  color = 'blue',
  size = 'small',
  className = '',
}) => {
  return <a className={`neno-${color} neno-${size} ${className}`}>{content}</a>;
};

export default NenoFont;
