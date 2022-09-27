// Create frame function, replaces the undefineds from the t func
export function createFrame(content: string) {
  return content.replaceAll('undefined', '');
}

// Ternary function
export function t(condition: boolean, truthy: string, falsy: string = '') {
  return condition ? truthy : falsy;
}

// Function

type JSAsset = Record<string, string | boolean>;

export function createScriptTags(data: JSAsset[] | JSAsset) {
  if (Array.isArray(data) && data.length) {
    return data
      .map(
        obj =>
          `<script ${Object.entries(obj)
            .map(([k, v]) => `${k.toLowerCase()}${t(typeof v == 'boolean', '', `="${v}"`)}`)
            .join(' ')}></script>`,
      )
      .join(' ');
  } else if (!Array.isArray(data) && data) {
    return `<script ${Object.entries(data)
      .map(([k, v]) => `${k.toLowerCase()}="${v}"`)
      .join(' ')}></script>`;
  }
}
