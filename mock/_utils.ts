export function resultSuccess<T = Recordable>(
  result: T,
  { message = 'ok' } = {},
) {
  return {
    code: 0,
    result,
    message,
    type: 'success',
  };
}
