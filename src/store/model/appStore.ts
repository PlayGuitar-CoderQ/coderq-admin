import { makeAutoObservable } from 'mobx';
import { ThemeEnum } from '@/enums/appEnum';
import { APP_DARK_MODE_KEY_ } from '@/enums/cachEnum';

import { message } from 'antd';

export const APP_STORE = 'appStore';

export interface AppStore {
  darkMode?: ThemeEnum;
  collapsed: boolean;
  setCollapsed: (type: boolean) => void;
  setDarkMode: (darkMode: ThemeEnum) => void;
  setWaitNotificationAppLogin: () => void;
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

  // 设置全局登陆等待提醒
  setWaitNotificationAppLogin() {
    const hide = message.loading('正在登录中........🎃');
    setTimeout(hide, 3500);
  },
});

export default appStore;
