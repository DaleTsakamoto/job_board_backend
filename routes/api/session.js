const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');
const bcrypt = require("bcryptjs");
const { User, Skill, UserSkill, JobsApplied, JobPosting } = require('../../db/models');
const { restoreUser } = require('../../utils/auth');

const router = express.Router();

/******Restore session user********/
router.get('/', restoreUser, asyncHandler(async (req, res) => {
  const { user } = req;

  if (user) {
    return res.json(user)
  }
}))


module.exports = router;