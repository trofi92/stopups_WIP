const express = require("express");
const router = express.Router();
const {
  updatePw,
  updatePhoneAndNickname,
} = require("../controllers/info");
const {
  isLoggedIn,
  isNotLoggedIn,
} = require("../middlewares/loggedIn");
const authJwt = require("../middlewares/authJwt");

router.get("/myInfoAgree", authJwt);
router.post("/updatePw", authJwt, updatePw);
router.post(
  "/updatePhoneAndNickname",
  authJwt,
  updatePhoneAndNickname
);

module.exports = router;
