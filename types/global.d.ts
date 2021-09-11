declare type Nullable<T> = T | null;
declare type Recordable<T = any> = Record<string, T>;
declare type isAny<T> = false extends true & T ? true : false;

declare interface ViteEnv {
  VITE_PORT: number;
  VITE_PROXY: [string, string][];
}
