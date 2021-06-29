import { makeAutoObservable } from 'mobx';
import { ThemeEnum } from '@/enums/appEnum';
import { APP_DARK_MODE_KEY_ } from '@/enums/cachEnum';

export interface AppStore {
  darkMode?: ThemeEnum;
  sign: string;
  setDarkMode: (darkMode: ThemeEnum) => void;
  setSign: (sign: string) => void;
}

const appStore = makeAutoObservable<AppStore>({
  darkMode: undefined,
  sign: 'CoderQ',
  setDarkMode(darkMode: ThemeEnum): void {
    this.darkMode = darkMode;
    localStorage.setItem(APP_DARK_MODE_KEY_, darkMode);
  },
  setSign(sign: string) {
    this.sign = sign;
  },
});

export default appStore;
