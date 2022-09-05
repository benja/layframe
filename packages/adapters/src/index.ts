import parse from 'html-react-parser';

export function nextAdapter<T>(template: (content: string, options?: T) => string, options?: T) {
  const rootId = 'template-root';
  const templateString = template('', options);

  return {
    rootId,
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
