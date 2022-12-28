const express = require("express");
const router = express.Router();
const {
  addBookmarks,
  sendBookmarks,
} = require("../controllers/bookmarks");

router.put("/addBookmarks", addBookmarks);
router.post("/sendBookmarks", sendBookmarks);
module.exports = router;
