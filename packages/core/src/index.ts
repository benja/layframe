// Create frame function, replaces the undefineds from the t func
export function createFrame(content: string) {
  return content.replaceAll('undefined', '');
}

// Ternary function
export function t(condition: boolean, truthy: string, falsy: string = '') {
  return condition ? truthy : falsy;
}
