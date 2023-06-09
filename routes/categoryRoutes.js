const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.index);
router.get("/crear", categoryController.create);
router.post("/", categoryController.store);
router.get("/:id", categoryController.show);
router.delete("/:id", categoryController.destroy);
//router.get("/:id/editar", categoryController.edit);
router.patch("/:id", categoryController.update);

module.exports = router;
