const express = require("express");
const router = express.Router();
const orderController = require("../controllers/OrderController");

router.get("/", orderController.index);
router.get("/crear", orderController.create);
router.post("/", orderController.store);
router.get("/:id", orderController.show);
router.delete("/:id", orderController.destroy);
//router.get("/:id/editar", categoryController.edit);
router.patch("/:id", orderController.update);

module.exports = router;
