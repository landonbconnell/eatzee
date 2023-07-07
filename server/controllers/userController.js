const User = require('../models/userSchema');

const createNewUser = (req, res) => {
  User.create(req.body)
    .then((newUser) => res.status(200).json(newUser))
    .catch((err) => res.status(500).json(err));
};

module.exports = { createNewUser };
