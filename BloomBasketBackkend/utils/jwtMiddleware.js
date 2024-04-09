// jwtMiddleware.js

const jwt = require('jsonwebtoken');

// Middleware to verify JWT token and extract user information
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, 'your_jwt_secret_key_here', (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        req.user = user; // Attach user information to the request
        next();
    });
}

module.exports = authenticateToken;
