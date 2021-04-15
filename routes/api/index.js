const router = require('express').Router();
const matchesRouter = require('./matches');
const sessionRouter = require('./session');
const userRouter = require('./users');

router.use('/matches', matchesRouter);
router.use('/session', sessionRouter);
router.use('/users', userRouter);


module.exports = router;