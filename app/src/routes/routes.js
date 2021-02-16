`use strict`;

const express = require("express");
const router = express.Router();
const ctrl = require("./cart.ctrl");

router.get("/api/showCart/:id", ctrl.output.showCart);
router.get("/api/addCart", ctrl.output.insertProduct);
router.delete("/api/showCart/:id", ctrl.process.deleteProduct);
router.post("/api/addCart", ctrl.process.insertProduct);

module.exports = router;
