var express = require("express");
var router = express.Router();
var User = require("../controller/authUserController")
var middlewareController = require("../controller/middlewareController")
var Users = require("../controller/apiUserController")
router.post("/sign-up", User.create);
router.post("/", User.check);

router.get("/list",Users.index)
router.get("/:id",Users.getUserbyId)
module.exports = router;
