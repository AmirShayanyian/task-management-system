const express = require('express');
const { MainRouter } = require('./services/router');
require('dotenv').config();

const port = process.env.SERVER_PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(MainRouter);

module.exports = { app, port };
