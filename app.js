const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const app = express();

app.get('/', (req, res) => {
  res.json('Welcome Home!')
})

module.exports = app;