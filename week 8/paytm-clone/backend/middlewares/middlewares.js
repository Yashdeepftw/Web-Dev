const jwt = require('jsonwebtoken');
const jwt_secret = require('../config');

const authMiddleware = (req, res, next) => {
    const authHeader = req.header.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403);
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, jwt_secret);
        req.userId = decoded.userId;
        next();
    }
    catch (err) {
        return res.status(403);
    }
};

module.exports = {
    authMiddleware
}