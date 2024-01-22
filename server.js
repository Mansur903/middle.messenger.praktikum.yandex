import express from 'express';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static('./dist'));

app.listen(PORT, () => (`Example app listening on port ${PORT}!`));

app.use('/login', (req, res) => {
  res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.use('/messenger', (req, res) => {
  res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.use('/main', (req, res) => {
  res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.use('/404', (req, res) => {
  res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.use('/sign-up', (req, res) => {
  res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.use('/settings', (req, res) => {
  res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.use('/profile', (req, res) => {
  res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.use('/changePassword', (req, res) => {
  res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

app.use('/serverError', (req, res) => {
  res.status(200).sendFile(`${__dirname}/dist/index.html`);
});
