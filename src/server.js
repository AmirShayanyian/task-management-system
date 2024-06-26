const express = require('express');
require('dotenv').config();

const port = process.env.SERVER_PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res, next) => {
  try {
    return res.json({
      message: `Welcome to Amir's task manager`,
    });
  } catch (error) {
    next(error);
  }
});
module.exports = { app, port };
