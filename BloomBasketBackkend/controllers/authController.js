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

exports.login = (req, res) => {
    const { email, password } = req.body;
    let userId = 1; // Assuming default user ID

    console.log("user name : ", email, password);

    User.getUserByEmail(email)
        .then((user) => {
            console.log("user :", user);

            if (!user || user.length === 0) {
                return res.status(401).send('Invalid username or password');
            }

            console.log("pass :", user[0].password);

            bcrypt.compare(password, user[0].password)
                .then((passwordMatch) => {
                    if (!passwordMatch) {
                        return res.status(401).send('Invalid username or password');
                    }

                    // Generate JWT token
                    const token = jwt.sign({ userId: user[0].user_id, username: user[0].username, email: user[0].email }, secretKey, { expiresIn: '1h' });

                    // Set the token as a cookie (optional)
                    res.cookie('token', token, { httpOnly: true });

                    // Send token and user ID in response
                    res.status(200).json({ token, userId: user[0].user_id });
                })
                .catch((compareError) => {
                    console.error('Error comparing passwords:', compareError);
                    res.status(500).send('Error comparing passwords');
                });
        })
        .catch((getUserError) => {
            console.error('Error fetching user by email:', getUserError);
            res.status(500).send('Error logging in user');
        });
};

