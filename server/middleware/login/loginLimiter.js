const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    errors: [
      {
        msg: 'Too many login attempts from this IP, please try again in an hour',
      },
    ],
  },
});

module.exports = loginLimiter;
