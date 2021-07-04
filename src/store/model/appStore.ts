import { makeAutoObservable } from 'mobx';
import { ThemeEnum } from '@/enums/appEnum';
import { APP_DARK_MODE_KEY_ } from '@/enums/cachEnum';
export const APP_STORE = 'appStore';

export interface AppStore {
  darkMode?: ThemeEnum;
  setDarkMode: (darkMode: ThemeEnum) => void;
}
const appStore = makeAutoObservable<AppStore>({
  darkMode: (localStorage.getItem(APP_DARK_MODE_KEY_) as ThemeEnum) || 'light',
  setDarkMode(darkMode: ThemeEnum): void {
    this.darkMode = darkMode;
    localStorage.setItem(APP_DARK_MODE_KEY_, darkMode);
  },
});

export default appStore;
