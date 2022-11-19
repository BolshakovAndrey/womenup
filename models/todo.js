const mongoose = require('mongoose');
const validator = require('validator');

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
