const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { setTokenCookie } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Welcome to the Users Route!')
})

router.post('/', asyncHandler(async (req, res) => {
  const { firstName, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password);
  const user = await User.create({
    firstName, email, hashedPassword
  })

  const token = setTokenCookie(res, user);

  return res.json(user)

}))

/*****Log in*****/
router.post('/login', asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    const passwordsMatch = bcrypt.compareSync(
      password,
      user.hashedPassword.toString()
    )
    if (passwordsMatch) {
      req.session.auth = {
        userId: user.id
      }
    }
  }
  res.json('User logged in!')

}))

module.exports = router;