const express = require('express');
const app = express();
const router = express.Router();
const User = require("../db")
const zod = require("zod");
const jwt = require('jsonwebtoken');
const jwt_secret = require('../config');

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string(),
})

app.post('/signup', async (req, res) => {
    const { success } = signupBody.safeParse(req.body)
    if(!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const  existingUser = await User.findOne({
        username: req.body.username
    })
    if(existingUser) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    })

    const userId = user._id;

    const token = jwt.sign({
        userId,
    }, jwt_secret);

    res.json({
        msg: 'User Created Successfully',
        token: token
    })
})

app.post('/signin', async (req, res) => {
    const signinBody = zod.object({
        username: string().email(),
        password: string()
    })

    const { success } = signinBody.safeParse(req.body);
    if(!success) {
        res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if(user) {
        const token = jwt.sign({
            userId: user._id
        }, jwt_secret);

        res.json({
            token: token
        })
        return;
    }
    
    res.status(411).json({
        message: 'Error while logging in'
    })
})

module.exports = {
    router
}