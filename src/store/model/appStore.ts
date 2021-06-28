import { makeAutoObservable } from 'mobx';

export interface AppStore {
  darkMode: boolean;
  sign: string;
  setDarkMode: (darkMode: boolean) => void;
  setSign: (sign: string) => void;
}

const appStore = makeAutoObservable<AppStore>({
  darkMode: false,
  sign: 'CoderQ',
  setDarkMode(darkMode: boolean) {
    this.darkMode = darkMode;
  },
  setSign(sign: string) {
    this.sign = sign;
  },
});

export default appStore;
