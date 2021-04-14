const router = require('express').Router();
const usersRouter = require('./users');
const sessionRouter = require('./session');

router.use('/users', usersRouter);
router.use('/session', sessionRouter);


module.exports = router;