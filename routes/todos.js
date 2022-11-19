const router = require('express').Router();
const { getTodos, getTodo, createTodo, deleteTodo } = require('../controllers/todos');
const { validateTodo  } = require('../middlewares/validators');

router.get('/', getTodos);
router.get('/:_id', getTodo);
router.post('/', validateTodo, createTodo);
router.delete('/:_id', deleteTodo);

module.exports = router;
