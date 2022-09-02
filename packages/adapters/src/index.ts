import parse from 'html-react-parser';

// Testing

function t(condition: unknown, truthy: string, falsy: string = '') {
  return condition ? truthy : falsy;
}

function createStencil(content: string) {
  return content.replaceAll('undefined', '');
}

export function nextAdapter<T>(template: (content: string, options?: T) => string, options?: T) {
  const rootId = 'template-root';
  const templateString = template(`<div id="${rootId}"></div>`, options);

  return {
    rootId,
    attributes: {
      html: templateString
        .match(/<html[^>]*>/gi)![0]
        .replace('<html', '')
        .slice(0, -1)
        .trim(),
      head: templateString
        .match(/<head[^>]*>/gi)![0]
        .replace('<head', '')
        .slice(0, -1)
        .trim(),
      body: templateString
        .match(/<body[^>]*>/gi)![0]
        .replace('<body', '')
        .slice(0, -1)
        .trim(),
    },
    TemplateHead: parse(
      templateString
        .match(/<head[^>]*>[\s\S]*<\/head>/gi)![0]
        .replace('<head>', '')
        .replace('</head>', ''),
    ),
    TemplateBody: parse(
      templateString
        .match(/<body[^>]*>[\s\S]*<\/body>/gi)![0]
        .replace('<body>', '')
        .replace('</body>', ''),
    ),
  };
}
