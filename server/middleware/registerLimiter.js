const rateLimit = require('express-rate-limit');

const message = {
  message:
    'Too many accounts created from this IP, please try again after an hour',
};

const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 requests per windowMs
  message,
});

module.exports = registerLimiter;
