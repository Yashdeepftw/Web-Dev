const { userRouter } = require('./user');
const express = require('express');

const router = express.Router();

router.use('/users', userRouter);

module.exports = router;