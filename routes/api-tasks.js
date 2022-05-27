var express = require("express");
var router = express.Router();
var apiTaskController = require("../controller/apiTaskController")

router.get("/", apiTaskController.index);
router.get("/:id", apiTaskController.getTaskbyId);
router.post("/", apiTaskController.addNewTask);
router.put("/:id", apiTaskController.fixTask);
router.delete("/:id", apiTaskController.deleteTask)


// router.get("/Task-in-cate/:id", apiTaskController.TaskInCate);
// router.get("/:id", apiTaskController.getTaskbyId);


module.exports = router;
