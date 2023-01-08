const express = require("express");
const {
  payments,
  success,
  failed,
} = require("../controllers/payment");
const authJwt = require("../middlewares/authJwt");

const router = express.Router();
router.post("/", authJwt, payments);
router.get("/success", authJwt, success);
router.get("/failed", authJwt, failed);

module.exports = router;
