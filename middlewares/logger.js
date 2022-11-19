const winston = require('winston');
const expressWinston = require('express-winston');

/** Логируем запросы */
const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: './logs/request.log' }),
  ],
  format: winston.format.json(),
});

/** Логируем ошибки */
const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({ filename: './logs/error.log' }),
  ],
  format: winston.format.json(),
});

module.exports = {
  requestLogger,
  errorLogger,
};
