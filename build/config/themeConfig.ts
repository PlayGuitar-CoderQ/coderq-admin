import { generate } from '@ant-design/colors';

export const darkMode = 'light';

// 默认主题颜色
export const primaryColor = '#a0d911';

type Fn = (...arg: any) => any;

type GenerateTheme = 'default' | 'dark';

// 生成的个全局颜色参数类型
export interface GenerateColorsParams {
  mixLighten: Fn;
  mixDarken: Fn;
  tinycolor: any;
  color?: string;
}

// 通过antd提供的色板生成颜色组合
export function generateAntColors(
  color: string,
  theme: GenerateTheme = 'default',
) {
  return generate(color, {
    theme,
  });
}

// 获取主题颜色，（由用户传进来的主色块生成）
export function getThemeColors(color?: string) {
  const tc = color || primaryColor;
  const lightColors = generateAntColors(tc); // 获取明亮模式的颜色值
  const primary = lightColors[5]; // antd生成的色板有10个，第五个就是当前色块的主题颜色
  const modeColors = generateAntColors(primary, 'dark'); // 通过明亮的主题色，获取暗黑模式下的色值

  return [...lightColors, ...modeColors];
}

// 生成less全局颜色方案，用于less全局替换颜色
export function generateColors({
  color = primaryColor,
  mixLighten,
  mixDarken,
  tinycolor,
}: GenerateColorsParams) {
  const arr = new Array(19).fill(0);
  const lightens = arr.map((_t, i) => {
    return mixLighten(color, i / 5);
  });

  const darkens = arr.map((_t, i) => {
    return mixDarken(color, i / 5);
  });

  // ARGB 颜色
  const alphaColors = arr.map((_t, i) => {
    return tinycolor(color)
      .setAlpha(i / 20)
      .toHexString();
  });

  // 解析 alph颜色
  const shortAlphaColors = alphaColors.map((item) =>
    item.replace(/\s/g, '').replace(/0\./g, '.'),
  );

  // 转换颜色
  const tinycolorLightens = arr
    .map((_t, i) => {
      return tinycolor(color)
        .lighten(i * 5)
        .toHexString();
    })
    .filter((item) => item !== '#ffffff');

  const tinycolorDarkens = arr
    .map((_t, i) => {
      return tinycolor(color)
        .darken(i * 5)
        .toHexString();
    })
    .filter((item) => item !== '#000000');

  console.log(
    'lightens',
    lightens,
    'darkens',
    darkens,
    'alphaColors',
    alphaColors,
    'shortAlphaColors',
    shortAlphaColors,
    'tinycolorLightens',
    tinycolorLightens,
    'tinycolorDarkens',
    tinycolorDarkens,
    'getThemeColors',
    getThemeColors(),
  );

  return [
    ...lightens,
    ...darkens,
    ...alphaColors,
    ...shortAlphaColors,
    ...tinycolorLightens,
    ...tinycolorDarkens,
  ].filter((item) => !item.includes('-'));
}
