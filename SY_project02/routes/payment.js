const express = require("express");
const {
  success,
  payment,
  failed,
} = require("../controllers/payment");
const authJwt = require("../middlewares/authJwt");

const router = express.Router();

router.get("/", authJwt, payment);
router.get("/success", authJwt, success);
router.get("/failed", authJwt, failed);

module.exports = router;
