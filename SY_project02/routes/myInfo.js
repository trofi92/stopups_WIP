const express = require("express");
const router = express.Router();
const {
  updatePw,
  updatePhoneAndNickname,
  bookmarks,
} = require("../controllers/info");

router.put("/bookmarks", bookmarks);
router.get("/MyInfoAgree");
router.post("/updatePw", updatePw);
router.post("/updatePhoneAndNickname", updatePhoneAndNickname);

module.exports = router;
