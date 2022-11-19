const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes //TODO
  max: 10000, // limit each IP to 100 requests per windowMs //TODO
});

module.exports = rateLimiter;
