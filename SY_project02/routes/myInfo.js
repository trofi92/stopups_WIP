const express = require("express");
const router = express.Router();
const {
  info,
  updatePw,
  updatePhoneAndNickname,
} = require("../controllers/info");
const {
  isLoggedIn,
  isNotLoggedIn,
} = require("../middlewares/loggedIn");

router.post("/", info);
router.post("/updatePw", updatePw);
router.post("/updatePhoneAndNickname", updatePhoneAndNickname);

module.exports = router;
