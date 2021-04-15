const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');
const bcrypt = require("bcryptjs");
const { User, Employer, Skill, JobPosting } = require('../../db/models');
const { restoreUser, setTokenCookie } = require('../../utils/auth');

const router = express.Router();

router.post('/signup', asyncHandler(async (req, res) => {
  let user;
  if (!req.body.employer) {
    const { firstName, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password);
    user = await User.create({
      firstName, email, hashedPassword
    })
  } else {
    const { name, email, password, industry, website } = req.body;
    const hashedPassword = bcrypt.hashSync(password);
    user = await Employer.create({
      name, email, industry, website, hashedPassword
    })
  }

  await setTokenCookie(res, user);
  return res.json(user)

}))

router.post('/login', asyncHandler(async (req, res) => {
  let user;
  let passwordsMatch;
  const { email, password } = req.body;

  if (!req.body.employer) {
    user = await User.findOne({
      include: [Skill, JobPosting],
      where: {
        email
      }
    });
  } else {
      user = await Employer.findOne({
        where: {
          email
        }
      })
  }
  if (user) {
    passwordsMatch = bcrypt.compareSync(
      password,
      user.hashedPassword.toString()
    )
  }
  if (passwordsMatch) {
    await setTokenCookie(res, user);
    console.log("THIS WORKED!!!", user)
    return res.json({ user })
  }
  return res.json('Auth failed!')
 
  })
)

/******Restore session user********/
router.get('/', restoreUser, asyncHandler(async (req, res) => {
  const { user } = req;
  if (user) {
    return res.json(user)
  }
}))


module.exports = router;