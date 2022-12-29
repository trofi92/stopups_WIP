const express = require("express");
const router = express.Router();
const {
  addBookmarks,
  sendBookmarks,
  deleteBookmarks,
} = require("../controllers/bookmarks");

router.put("/addBookmarks", addBookmarks);
router.post("/sendBookmarks", sendBookmarks);
router.put("/deleteBookmarks", deleteBookmarks);
module.exports = router;
