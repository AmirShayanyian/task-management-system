const express = require('express');
const { MainRouter } = require('./routes/router');
const mmd = require('./configs/model.config');
const notFound = require('./middlewares/notFound.handler');
const errorHandler = require('./middlewares/globalError.handler');
require('dotenv').config();
mmd();
const port = process.env.SERVER_PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(MainRouter);
app.use(notFound);
app.use(errorHandler);

module.exports = { app, port };
