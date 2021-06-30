import { generateAntColors, primaryColor } from '../config/themeConfig';
import { getThemeVariables } from 'antd/dist/theme';
import { resolve } from 'path';

export function generateModifyVars(dark = false) {
  const primaryColorObj: Record<string, string> = {};
  const modifyVars = getThemeVariables({ dark });
  const palettes = generateAntColors(primaryColor);
  const primary = palettes[5];

  for (let index = 0; index < 10; index++) {
    primaryColorObj[`primary-${index + 1}`] = palettes[index];
  }

  return {
    ...modifyVars,
    ...primaryColorObj,
    hack: `${modifyVars.hack} @import (reference) "${resolve(
      'src/design/config.less',
    )}";`,
    'primary-color': primary,
    'info-color': primary,
    'processing-color': primary,
    'success-color': '#55D187', //  Success color
    'error-color': '#ED6F6F', //  False color
    'warning-color': '#EFBD47', //   Warning color
    'border-color-base': '#EEEEEE',
    'font-size-base': '14px', //  Main font size
    'border-radius-base': '2px', //  Component/float fillet
    'link-color': primary, //   Link color
    'app-content-background': '#fafafa', //   Link color
  };
}
