import { generate } from '@ant-design/colors';

export const darkMode = 'light';

export const primaryColor = '#096dd9';

type Fn = (...arg: any) => any;

type GenerateTheme = 'default' | 'dark';

export function generateAntColors(
  color: string,
  theme: GenerateTheme = 'default',
) {
  return generate(color, {
    theme,
  });
}
