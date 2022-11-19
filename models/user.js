const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const StatusMessages = require('../utils/status-messages');

/**
 * Модель пользователя
 * @constructor
 * @param {string} email - Почта пользователя
 * @param {string} password - Пароль пользователя
 * @param {string} name - Имя пользователя
 */

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: 8,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

// Служебная функиця обработки JSON
function toJSON() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
}

userSchema.methods.toJSON = toJSON;


/**
 * Поиск пользователя по параметрам авторизации
 * @constructor
 * @param {string} email - Почта пользователя
 * @param {string} password - Пароль пользователя
 */
userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
      .then((user) => {
        if (!user) {
          return Promise.reject(new Error(StatusMessages.INVALID_CREDENTIALS));
        }

        return bcrypt.compare(password, user.password)
            .then((matched) => {
              if (!matched) {
                return Promise.reject(new Error(StatusMessages.INVALID_CREDENTIALS));
              }

              return user;
            });
      });
};

module.exports = mongoose.model('user', userSchema);
