const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');

const { secret, expiresIn } = jwtConfig;

// Send a JWT Cookie
const setTokenCookie = (res, user) => {

  const userDataForToken = {
    id: user.id,
    email: user.email
  }
  // Create the token
  const token = jwt.sign(
    { data: userDataForToken },
    secret,
    { expiresIn: parseInt(expiresIn) }
  )

  const isProduction = process.env.NODE_ENV === 'production';

  // Set the token cookie
  res.cookie('token', token, {
    maxAge: expiresIn * 1000,
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax"
  })

  return token;
}

module.exports = { setTokenCookie }