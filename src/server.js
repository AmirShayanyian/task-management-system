const express = require('express');
const { MainRouter } = require('./services/router');
const sequelize = require('./configs/db.config');
require('dotenv').config();
require('./models/user.model');
require('./models/task.model');

const port = process.env.SERVER_PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(MainRouter);

module.exports = { app, port };
