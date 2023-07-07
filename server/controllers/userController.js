const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');

const login = async (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ errors: [{ msg: 'User not found' }] });
      } else {
        bcrypt.compare(
          req.body.password,
          user.password,
          function (err, result) {
            if (result) {
              return res.status(200).json({ msg: 'Login successful' });
            } else {
              return res
                .status(401)
                .json({ errors: [{ msg: 'Incorrect password' }] });
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

const registerNewUser = (req, res) => {
  User.create(req.body)
    .then((newUser) => res.status(200).json(newUser))
    .catch((err) => res.status(500).json(err));
};

module.exports = { login, registerNewUser };
