import { useContext } from 'react';
import { stores, storeContext } from '@/store';

export const useStores = () => useContext(storeContext);

export const useStore = <T extends keyof typeof stores>(
  store: T,
): typeof stores[T] => useContext(storeContext)[store];
