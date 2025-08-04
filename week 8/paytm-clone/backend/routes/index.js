const userRouter = require('./user');
const accountRouter = require('./account');
const express = require('express');

const router = express.Router();

router.use('/users', userRouter);
router.use('/account', accountRouter)

module.exports = router;