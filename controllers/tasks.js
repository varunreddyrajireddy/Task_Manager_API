const Task = require("../models/Task");
const asyncHandler = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const postTask = asyncHandler(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncHandler(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const updateTask = asyncHandler(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncHandler(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  postTask,
  getTask,
  updateTask,
  deleteTask,
};
