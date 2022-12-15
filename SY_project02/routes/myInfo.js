const express = require("express");
const router = express.Router();
const info = require("../controllers/info");

router.post("/", info);
router.post("/updateInfo");

module.exports = router;
