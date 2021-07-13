import { makeAutoObservable } from 'mobx';
import { ThemeEnum } from '@/enums/appEnum';
import { APP_DARK_MODE_KEY_ } from '@/enums/cachEnum';
export const APP_STORE = 'appStore';

export interface AppStore {
  darkMode?: ThemeEnum;
  collapsed: boolean;
  setCollapsed: (type: boolean) => void;
  setDarkMode: (darkMode: ThemeEnum) => void;
}

const appStore = makeAutoObservable<AppStore>({
  darkMode: (localStorage.getItem(APP_DARK_MODE_KEY_) as ThemeEnum) || 'light',
  collapsed: false,

  // 设置暗黑模式
  setDarkMode(darkMode: ThemeEnum): void {
    this.darkMode = darkMode;
    localStorage.setItem(APP_DARK_MODE_KEY_, darkMode);
  },

  // 设置菜单收起状态
  setCollapsed(type: boolean): void {
    this.collapsed = type;
  },
});

export default appStore;
