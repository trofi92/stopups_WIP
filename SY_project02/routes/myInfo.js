const express = require("express");
const router = express.Router();
const {
  updatePw,
  updatePhoneAndNickname,
  passwordAuth,
  findEmailByPhoneNumber,
  updatePwWithEmail,
  forgetAndModifyPw,
} = require("../controllers/info");

router.get("/MyInfoAgree");
router.post("/updatePw", updatePw);
router.post("/forgetAndModifyPw", forgetAndModifyPw);
router.post("/updatePhoneAndNickname", updatePhoneAndNickname);
router.post("/passwordAuth", passwordAuth);
router.post("/findEmail", findEmailByPhoneNumber);
router.post("/updatePwWithEmail", updatePwWithEmail);

module.exports = router;
