const express = require("express");
const router = express.Router();
const {
  updatePw,
  updatePhoneAndNickname,
  passwordAuth,
  findEmailByPhoneNumber,
  updatePwWithEmail,
  forgetAndModifyPw,
  deleteUser,
} = require("../controllers/info");
const authJwt = require("../middlewares/authJwt");

router.get("/MyInfoAgree");
router.post("/updatePw", authJwt, updatePw);
router.post("/forgetAndModifyPw", forgetAndModifyPw);
router.post(
  "/updatePhoneAndNickname",
  authJwt,
  updatePhoneAndNickname
);
router.post("/passwordAuth", authJwt, passwordAuth);
router.post("/findEmail", findEmailByPhoneNumber);
router.post("/updatePwWithEmail", updatePwWithEmail);
router.post("/deleteUser", deleteUser);

module.exports = router;
