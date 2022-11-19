const { celebrate, Joi } = require('celebrate');

/** Валидация данных для регистрации. */
const validateSignup = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
  }),
});

/** Валидация данных для авторизации. */
const validateSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

/** Валидация данных для обновления профиля пользователя */
const validateProfileUpdate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required().min(2).max(30),
  }),
});

/** Валидация данных задачи */
const validateTodo = celebrate({
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
  }),
});

module.exports = {
  validateSignup,
  validateSignin,
  validateProfileUpdate,
  validateTodo,
};
