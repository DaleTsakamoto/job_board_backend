const express = require('express');
const asyncHandler = require('express-async-handler');
const { JobPosting, Employer, Sequelize, sequelize } = require('../../db/models');

const Op = Sequelize.Op;

const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
  const { salary, experience } = req.body
  let start = salary[0]
  let end = salary[1]
    let jobs = await Employer.findAll({
      include: {
        model: JobPosting,
        where: {
          experience: parseInt(experience),
          salary: { [Op.between]: [start, end] },
        }
      }
    })
  return res.json({ jobs })

}))


module.exports = router;