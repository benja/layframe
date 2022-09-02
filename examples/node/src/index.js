import express from 'express';
import { template } from '../../your-template/index';
import fs from 'fs';
import path from 'path';

const app = express();

app.get('/index.js', (_, res) => {
  const scriptPath = path.resolve(__dirname, './script.js');
  res.sendFile(scriptPath);
});

app.get('/', (req, res) => {
  res.send(
    template('<div id="root"></div>', {
      meta: {
        title: 'Hello',
        description: 'Something',
      },
      canonical: 'https://google.com/hi',
      js: [
        {
          src: 'http://localhost:3030/index.js',
        },
        {
          src: 'https://unpkg.com/react@18/umd/react.development.js',
          crossOrigin: true,
        },
        {
          src: 'https://unpkg.com/react-dom@18/umd/react-dom.development.js',
          crossOrigin: true,
        },
      ],
    }),
  );
});

app.listen(3030, () => {
  console.log('lmao serving server nice ecks dee');
});
