/**
 * @description 用于按需导入组件库样式
 */
import styleImport from 'vite-plugin-style-import';

export function configStyleImportPlugin() {
  const styleImportPlugin = styleImport({
    libs: [
      {
        libraryName: 'antd',
        esModule: true,
        resolveStyle: (name) => `antd/lib/${name}/style/index.less`,
      },
    ],
  });
  return styleImportPlugin;
}
