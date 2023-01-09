const express = require("express");
const { order, orderedItems } = require("../controllers/order");
const router = express.Router();

router.post("/", order);
router.post("/orderedItems", orderedItems);

module.exports = router;
