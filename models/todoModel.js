const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  id: String,
  name: String,
  isImportant: Boolean,
  isCompleted: Boolean,
  isDelete: Boolean,
  categories: String
})

const todoModel = mongoose.model('todos', todoSchema, 'todos');

module.exports = todoModel;