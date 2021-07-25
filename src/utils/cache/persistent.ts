import { TOKEN_KEY, APP_DARK_MODE_KEY_ } from '@/enums/cachEnum';

interface BasicStore {
  [TOKEN_KEY]: string | number | null | undefined;
  [APP_DARK_MODE_KEY_]: 'light' | 'dark';
}

export type BasicKeys = keyof BasicStore;
