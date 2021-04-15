const router = require('express').Router();
const matchesRouter = require('./matches');
const sessionRouter = require('./session');

router.use('/matches', matchesRouter);
router.use('/session', sessionRouter);


module.exports = router;