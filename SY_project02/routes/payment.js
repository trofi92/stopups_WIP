const express = require("express");
const {
  success,
  payment,
  failed,
} = require("../controllers/payment");

const router = express.Router();

router.get("/", payment);
router.post("/success", success);
router.get("/failed", failed);

module.exports = router;
