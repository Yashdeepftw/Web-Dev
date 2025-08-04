const express = require('express');
const router = express.Router();
const { User, Account } = require('../db');
const authMiddleware = require('../middlewares/middlewares')


router.get('balance', authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.status(200).json({
        balance: account.balance
    })
})

module.exports = {
    router
}