const express = require("express");
const router = express.Router();
const statusController = require("../controllers/statusController");

router.get("/", statusController.index);
router.get("/crear", statusController.create);
router.post("/", statusController.store);
router.get("/:id", statusController.show);
router.delete("/:id", statusController.destroy);
//router.get("/:id/editar", categoryController.edit);
router.patch("/:id", statusController.update);

module.exports = router;
