export function checkStatus(status: number, msg: string): void {
  let errMessage = '';

  switch (status) {
    case 400:
      errMessage = `${msg}`;
      break;
    case 403:
      errMessage = '暂无权限';
      break;
    case 404:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      errMessage = '请求不存在';
      break;
    default:
  }

  // 预览弹窗位置---
  if (errMessage) return;
}
