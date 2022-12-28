const express = require("express");
const router = express.Router();
const {
  updatePw,
  updatePhoneAndNickname,
} = require("../controllers/info");

router.get("/MyInfoAgree");
router.post("/updatePw", updatePw);
router.post("/updatePhoneAndNickname", updatePhoneAndNickname);

module.exports = router;
