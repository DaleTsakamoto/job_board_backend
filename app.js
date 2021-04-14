const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

if (!isProduction) {
  app.use(cors())
}

app.use(helmet({
  contentSecurityPolicy: false
}));

//TODO Need to finish csrf setup
// app.use(csurf({
//   cookie: {
//     secure: isProduction,
//     sameSite: isProduction && 'Lax',
//     httpOnly: true
//   }
// }))

app.use(routes)

app.get('/', (req, res) => {
  res.json('Welcome Home!')
})

module.exports = app;