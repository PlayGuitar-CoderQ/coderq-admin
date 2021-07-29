/**
 * @description 切换黑暗主题按钮
 * @author CoderQ
 */

import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

import { Switch } from 'antd';
import IconFont from '@/components/IconFont';

import { useStore } from '@/hooks/setting';
import { ThemeEnum } from '@/enums/appEnum';
import { updateDarkThem } from '@/logic/theme/dark';
import { APP_STORE } from '@/store/model/appStore';

const SwitchDark: FC = () => {
  const appStore = useStore(APP_STORE);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const checked = appStore.darkMode === ThemeEnum.LIGHT ? true : false;
    setDarkMode(checked);
  }, []);

  // 切换主题颜色
  const onToggleDarkMode = (checked: boolean) => {
    const darkMode = checked ? ThemeEnum.LIGHT : ThemeEnum.DARK;
    appStore.setDarkMode(darkMode);
    setDarkMode(checked);
    updateDarkThem(darkMode);
  };

  return (
    <>
      <Switch
        onChange={(e) => onToggleDarkMode(e)}
        checked={darkMode}
        checkedChildren={<IconFont type="icon-taiyang" />}
        unCheckedChildren={<IconFont type="icon-yueliang" />}
      />
    </>
  );
};

export default SwitchDark;
