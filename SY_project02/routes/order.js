const express = require("express");
const { order } = require("../controllers/order");
const router = express.Router();

router.post("/", order);

module.exports = router;
