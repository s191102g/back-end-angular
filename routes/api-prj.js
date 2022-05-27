var express = require("express");
var router = express.Router();
var apiPrjController = require("../controller/apiPrjController")

router.get("/", apiPrjController.index);
router.get("/:id", apiPrjController.getPrjbyId);
router.post("/", apiPrjController.addNewPrj);
router.put("/:id", apiPrjController.fixPrj);
router.delete("/:id", apiPrjController.deletePrj)


// router.get("/Prj-in-cate/:id", apiPrjController.PrjInCate);
// router.get("/:id", apiPrjController.getPrjbyId);


module.exports = router;
