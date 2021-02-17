`use strict`;

const express = require("express");
const router = express.Router();
const ctrl = require("./cart.ctrl");

router.get("/api/showcart/:id", ctrl.output.showCart);
router.get("/api/addcart", ctrl.output.insertProduct);
router.delete("/api/showcart/:id/delete", ctrl.process.deleteProduct);
router.post("/api/addcart", ctrl.process.insertProduct);

module.exports = router;
