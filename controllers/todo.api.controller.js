const todoModel = require("../models/todoModel");

module.exports.getTodoList = async (req, res) => {
  try {
    const todoList = await todoModel.find({});
    res.json(todoList);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.createTask = async (req, res) => {
  try {
    let newTask = req.body;
    newTask = await todoModel.create(newTask);
    res.json(newTask);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.updateTask = async (req, res) => {
  try {
    const updateField = req.body;
    const updatedTodo = await todoModel.findOneAndUpdate(
      {
        id: updateField.id,
      },
      updateField,
      { new: true }
    );
    console.log(updatedTodo);
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.deleteTask = async (req, res) => {
  try {
    // console.log(req.body);
    const deleteId = req.body.id;
    const deleteItem = await todoModel.findOneAndUpdate(
      {
        id: deleteId,
      },
      {
        isDelete: true,
      },
      {
        new: true,
      }
    );
    res.json(deleteItem);
  } catch (error) {
    res.status(500).json(error);
  }
};
