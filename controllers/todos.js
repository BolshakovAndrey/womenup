const Todo = require('../models/todo');
const ErrorNames = require('../utils/error-names');
const StatusCodes = require('../utils/status-codes');
const StatusMessages = require('../utils/status-messages');

const { NotFoundError, ForbiddenError, BadRequestError } = require('../errors/index');

// Получим все задачи
module.exports.getTodos = (req, res, next) => {
  Todo.find({})
    .then((todos) => res.send({ data: todos }))
    .catch(next);
};

// Получим задачу по ID
module.exports.getTodo = (req, res, next) => {
  Todo.findById(req.params._id)
    .then((todo) => {
      if (!todo) {
        throw new NotFoundError();
      }
         res.send(todo)
    })
    .catch((err) => {
      if (err.name === ErrorNames.CAST) {
        throw new BadRequestError(StatusMessages.INVALID_ID);
      }
      next(err);
    })
    .catch(next);
};


// Создаем задачу
module.exports.createTodo = (req, res, next) => {
  const { title, description } = req.body;

  const owner = req.user._id;

  // Создаем зачачу
  // На модели  используем метод create
  Todo.create({ title, description, owner })
    .then((todo) => res.status(StatusCodes.CREATED).send(todo))
    .catch((err) => {
      if (err.name === ErrorNames.VALIDATION) {
        throw new BadRequestError(`Переданы некорректные данные при добавлении задачи: ${err}`);
      }
      next(err);
    })
    .catch(next);
};

// Удаляем зачачу
module.exports.deleteTodo = (req, res, next) => {
  Todo.findById(req.params._id)
    .then((todo) => {
      if (!todo) {
        throw new NotFoundError();
      }
      if (JSON.stringify(todo.owner) !== JSON.stringify(req.user._id)) {
        throw new ForbiddenError();
      } else {
        return todo.remove()
          .then(() => res.status(StatusCodes.OK).send({ message: StatusMessages.OK }));
      }
    })
    .catch((err) => {
      if (err.name === ErrorNames.CAST) {
        throw new BadRequestError(StatusMessages.INVALID_ID);
      }
      next(err);
    })
    .catch(next);
};
