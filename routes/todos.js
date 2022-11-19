const router = require('express').Router();
const { getTodos, createTodo, deleteTodo } = require('../controllers/todos');
const { validateTodo, validateTodoId  } = require('../middlewares/validators');

router.get('/', getTodos);
router.post('/', validateTodo, createTodo);
// router.delete('/:todoId', validateTodoId, deleteTodo);

module.exports = router;
