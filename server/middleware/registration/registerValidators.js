const User = require("../../models/userSchema"); // import your User model

const { body } = require("express-validator");

exports.registerValidators = [
  body("username")
    .trim()
    .escape()
    .isLength({ min: 5 })
    .withMessage("Username must be at least 5 characters long.")
    .custom(async (value) => {
      const user = await User.findOne({ username: value });
      if (user) {
        throw new Error("Username already in use");
      }
    }),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long.")
    .matches(/\d/)
    .withMessage("Password must contain a number")
    .matches(/[a-z]/)
    .withMessage("Password must contain a lowercase letter")
    .matches(/[A-Z]/)
    .withMessage("Password must contain an uppercase letter")
    .matches(/[^A-Za-z0-9]/)
    .withMessage("Password must contain a special character"),
  body("email")
    .isEmail()
    .withMessage("Must be a valid email address")
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw new Error("Email already in use");
      }
    }),
];
