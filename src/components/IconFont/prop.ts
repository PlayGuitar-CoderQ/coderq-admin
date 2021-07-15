import { CSSProperties } from 'react';

export interface Prop {
  type: string;
  style?: CSSProperties;
  onClick?: () => void;
}
