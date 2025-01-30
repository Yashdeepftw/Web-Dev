const jwt = require('jsonwebtoken');

const secret = "@#123";

function auth (user){
    return jwt.sign(user, secret);
}

function verifyAuth(token){
    return jwt.verify(token, secret);
}