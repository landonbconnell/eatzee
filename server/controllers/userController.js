const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const generateAccessToken = require('../utils/generateAccessToken');

const login = async (req, res) => {
  // Check if the user exists
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        // If the user doesn't exist, send an error message
        return res
          .status(401)
          .json({ errors: [{ msg: 'Incorrect username or password' }] });
      } else {
        // If the user exists, compare the password with the stored password
        bcrypt.compare(
          req.body.password,
          user.password,
          function (err, result) {
            if (result) {
              // Generate an access token
              const token = generateAccessToken(user.username);

              // Set token in an HTTP-only cookie
              res.cookie('token', token, {
                httpOnly: true,
                sameSite: 'strict', // protection against CSRF
                secure: process.env.NODE_ENV !== 'development', // use HTTPS in production
                maxAge: 3600000, // cookie expiration time
              });

              // Send a success message
              res.status(200).json({ msg: 'Login successful' });
            } else {
              // If the password is incorrect, send an error message
              return res.status(401).json({
                errors: [{ msg: 'Incorrect username or password' }],
              });
            }
          }
        );
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ errors: [{ msg: 'Server error' }] });
    });
};

const logout = (req, res) => {
  // Clear the token cookie
  res.clearCookie('token');

  // Send response
  res.send({ success: true });
};

const registerNewUser = (req, res) => {
  User.create(req.body)
    .then((newUser) => res.status(200).json(newUser))
    .catch((err) => res.status(500).json(err));
};

const updateUserData = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOneAndUpdate(
      { _id: req.body.id },
      {
        $set: {
          data: req.body.data,
        },
      },
      { new: true }
    );
    if (!user) {
      res.status(404).json({ msg: 'User not found' });
    } else {
      res.status(200).json({ msg: 'User data updated successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { login, logout, registerNewUser, updateUserData };
