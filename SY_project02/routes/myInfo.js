const express = require("express");
const router = express.Router();
const info = require("../controllers/info");

router.post("/", info);

router.get("/", info);

module.exports = router;
