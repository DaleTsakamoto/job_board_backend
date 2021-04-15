const express = require('express');
const asyncHandler = require('express-async-handler');
const { JobPosting, Employer, Sequelize, sequelize } = require('../../db/models');

const router = express.Router();

//TODO can finish this route later
router.patch('/:id', asyncHandler(async (req, res) => {
    const {location, experience} = req.body;
}))



module.exports = router;