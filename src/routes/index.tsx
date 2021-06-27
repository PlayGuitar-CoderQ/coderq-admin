import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { routeList } from './model';

export const RenderRouter: FC = () => {
  const elemet = useRoutes(routeList);
  return elemet;
};
