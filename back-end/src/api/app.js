const express = require('express');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/', (_req, res) => res.json('Hellow world!'));
module.exports = app;