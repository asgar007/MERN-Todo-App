const express = require('express');
const router = express.Router();
const addTodoController = require('../controllers/todo-controller')

router.post('/todos', addTodoController.addTodo);
router.get('/todos', addTodoController.getAllTodos);
router.get('/todos/:id', addTodoController.toggleTodoDone);
router.put('/todos/:id', addTodoController.updateTodo);
router.delete('/todos/:id', addTodoController.deleteTodo)

module.exports = router; 