import { createFrame, t } from '../../packages/core/dist';

export function template(content, options) {
  let scripts = '';

  // Handle JS passed to the options
  if (Array.isArray(options?.js) && options?.js.length) {
    scripts = options?.js
      .map(
        obj =>
          `<script ${Object.entries(obj)
            .map(([k, v]) => `${k.toLowerCase()}${t(typeof v == 'boolean', '', `="${v}"`)}`)
            .join(' ')}></script>`,
      )
      .join(' ');
  } else if (!Array.isArray(options?.js) && options?.js) {
    scripts = `<script ${Object.entries(options?.js)
      .map(([k, v]) => `${k.toLowerCase()}="${v}"`)
      .join(' ')}></script>`;
  }

  return createFrame(`
      <!doctype html>
      <html lang="nb-NO">
          <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  
              ${t(options?.meta?.title, `<title>${options?.meta?.title}</title>`)}
              ${options?.favicons}
              ${options?.trackJs} 
              <link rel="dns-prefetch" href="https://images.finncdn.no">
              <link rel="preconnect" href="https://images.finncdn.no">
              <link rel="dns-prefetch" href="https://assets.finn.no">
              <link rel="preconnect" href="https://assets.finn.no">
              ${options?.authTracker}
              ${t(options?.canonical, `<link rel="canonical" href="${options?.canonical}">`)}
              ${t(options?.meta?.description, `<meta name="description" content="${options?.meta?.description}">`)}
              ${t(
                options?.twitter,
                `<meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@FINN_no">`,
              )}
              ${t(
                options?.itunes,
                `<meta name="apple-itunes-app" content="app-id=526541908,affiliate-data=pt=295309&amp;ct=smart-app-banner">`,
              )}
          </head>
          <body>
              ${scripts}
          </body>
      </html>
  `);
}
