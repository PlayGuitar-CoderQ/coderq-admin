import { generate } from '@ant-design/colors';

type GenerateTheme = 'default' | 'dark';

export const darkMode = 'light';

export const primaryColor = '#096dd9';

export function generateAntColors(
  color: string,
  theme: GenerateTheme = 'default',
) {
  return generate(color, {
    theme,
  });
}
