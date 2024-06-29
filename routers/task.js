const express = require("express")
const taskRouter = express.Router();
const taskController = require("../controllers/task")
taskRouter.post("/", taskController.create)
    .get("/", taskController.getAll)
    .get("/:id", taskController.get)
    .put("/:id", taskController.replace)
    .patch("/:id", taskController.update)
    .delete("/:id", taskController.delete)

exports.taskRouter = taskRouter;