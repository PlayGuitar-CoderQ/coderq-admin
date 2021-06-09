import vitePluginImp from 'vite-plugin-imp';

export function configStyleImportPlugin(isBuild: boolean) {
  if (isBuild) return [];
  const styleImportPlugin = vitePluginImp({
    libList: [
      {
        libName: 'antd',
        style: (name) => `antd/lib/${name}/style/index.less`,
      },
    ],
  });
  return styleImportPlugin;
}
