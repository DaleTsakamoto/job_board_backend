const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User, Skill, JobPosting, Employer } = require('../db/models');

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

const restoreUser = (req, res, next) => {
  const { token } = req.cookies;

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      return next();
    }

    try {
      const { id } = jwtPayload.data;
      if (!req.body.employer) {
      req.user = await User.findOne({
        include: [Skill, JobPosting],
        where: {
          id
        }
      })
    } else {
      req.user = await Employer.findOne({
        where: {
          id
        }
      })
    }
    } catch (e) {
      e.status = 401;
      return next(e);
    }
    if (!req.user) {
      res.set('WWW-Authenticate', 'Bearer').status(401).end();
    }
    return next();
  })
}

module.exports = { setTokenCookie, restoreUser }