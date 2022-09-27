import parse from 'html-react-parser';

export function reactAdapter<T>(template: (content: string, options?: T) => string, options?: T) {
  const templateString = template('', options);

  return {
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
