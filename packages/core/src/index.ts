export * from './utils';

export function createStencil(content: string) {
  return content.replaceAll('undefined', '');
}
