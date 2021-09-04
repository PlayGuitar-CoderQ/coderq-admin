import { ReactElement } from 'react';

export interface MenuItem {
  title: string;
  icon?: string;
  path: string;
  element: ReactElement<Pick<MenuItem, 'icon' | 'title'>>;
  children?: MenuItem[];
}
