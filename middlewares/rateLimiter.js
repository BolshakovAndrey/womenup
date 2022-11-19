const rateLimit = require('express-rate-limit');

/** Ограничиваем количетсво запросов к серверу для повышения устойчивости в продакш */
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

module.exports = rateLimiter;
