const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {secretKey} = require('../config/config');

exports.signup = async (req, res) => {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await User.createUser(username, hashedPassword, email);
        res.status(201).json({ email: email , message:"User signed up successfully"  });
    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).send('Error signing up user');
    }
};

exports.login = async (req, res) => {
    const { email , password } = req.body;
    try {
        let userId = 1;
        console.log("user name : ", email , password);
        const user = await User.getUserByEmail(email);
        console.log("user :", user);
        if (!user || user.length === 0) {
            return res.status(401).send('Invalid username or password');
        }
        console.log("pass :" , password);
        const passwordMatch = await bcrypt.compare(password, '$2b$10$YKpDAsXXE3xXB4ygW33iuun8/blTGHnkxdtROI0jkQlNQit3/Ogr6');
        if (!passwordMatch) {
            return res.status(401).send('Invalid username or password');
        }

        // Generate JWT token
        const token = jwt.sign({ userId: 1, username: 'saral_' , email: email }, secretKey, { expiresIn: '1h' });

        // Set the token as a cookie (optional)
        res.cookie('token', token, { httpOnly: true });

        // Send token in response
        res.status(200).json({ token , userId });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).send('Error logging in user');
    }
};
