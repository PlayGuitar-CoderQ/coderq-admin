import { createContext } from 'react';
import appStore from './model/appStore';
import { Stores } from './type';

export const stores = Object.freeze<Stores>({
  appStore,
});

export const storeContext = createContext(stores);
export const StoresProvider = storeContext.Provider;
