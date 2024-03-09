const getAllTasks = (req, res) => {
  res.send("All tasks");
};

const postTask = (req, res) => {
  res.send("Post task");
};

const getTask = (req, res) => {
  res.send("Get Single task");
};

const updateTask = (req, res) => {
  res.send("Update task");
};

const deleteTask = (req, res) => {
  res.send("Delete task");
};

module.exports = {
  getAllTasks,
  postTask,
  getTask,
  updateTask,
  deleteTask,
};
