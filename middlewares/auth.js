const jwt = require('jsonwebtoken');

const { UnauthorizedError } = require('../errors/index');
const { JWT_SECRET } = require('../utils/constants');

/** Авторизация с ипользованием JSON Web Token */
module.exports = (req, res, next) => {
  if (!req.cookies.jwt) {
    throw new UnauthorizedError();
  }

  const token = req.cookies.jwt;

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new UnauthorizedError();
  }

  req.user = payload;

  next();
};
