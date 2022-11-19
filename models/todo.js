const mongoose = require('mongoose');

/**
 * Модель задачи
 * @param {string} title - Название задачи
 * @param {string} description - Описание задачи
 * @param {ref} owner - Созадетль задачи
 * @param {number} todoId - Номер задачи
 */

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  todoId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('todo', todoSchema);
