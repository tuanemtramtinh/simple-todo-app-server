const express = require('express');
const router = express.Router();
const controller = require('../controllers/todo.api.controller');

router.get('/', controller.getTodoList);
router.post('/', controller.createTask);
router.patch('/', controller.updateTask);
router.delete('/', controller.deleteTask);

module.exports = router;