const express = require("express");
const router = express.Router();
const {
  updatePw,
  updatePhoneAndNickname,
  passwordAuth,
} = require("../controllers/info");

router.get("/MyInfoAgree");
router.post("/updatePw", updatePw);
router.post("/updatePhoneAndNickname", updatePhoneAndNickname);
router.post("/passwordAuth", passwordAuth);

module.exports = router;
