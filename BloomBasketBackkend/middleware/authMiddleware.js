const jwt = require('jsonwebtoken');
const {secretKey} = require('../config/config');

const verifyToken = (req, res, next) => {
    const token = req.cookies.token; 

    if (!token) {
        return res.status(401).send('Unauthorized: No token provided');
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(403).send('Unauthorized: Invalid token');
    }
};

module.exports = verifyToken;
