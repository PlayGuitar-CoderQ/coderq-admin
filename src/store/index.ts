import { createContext } from 'react';
import appStore from './model/appStore';
import userStore from './model/userStore';
import { Stores } from './type';

export const stores = Object.freeze<Stores>({
  appStore,
  userStore,
});

export const storeContext = createContext(stores);
export const StoresProvider = storeContext.Provider;
