const express = require("express");
const router = new express.Router();
const {
  getAllTasks,
  updateTask,
  getTask,
  createTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
