const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");

router.get("/", OrderController.index);
router.get("/crear", OrderController.create);
router.post("/", OrderController.store);
router.get("/:id", OrderController.show);
router.delete("/:id", OrderController.destroy);
//router.get("/:id/editar", categoryController.edit);
router.patch("/:id", OrderController.update);

module.exports = router;
