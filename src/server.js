const express = require('express');
require('dotenv').config();
const port = process.env.SERVER_PORT || 3000;
const app = express();

module.exports = { app, port };
