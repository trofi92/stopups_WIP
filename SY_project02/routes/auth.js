const express = require("express");

const {
  isLoggedIn,
  isNotLoggedIn,
} = require("../middlewares/loggedIn");
const { join } = require("../controllers/join");
const { login, logout } = require("../controllers/login");

const router = express.Router();

router.post("/join", isNotLoggedIn, join);
router.post("/login", isNotLoggedIn, login);

//로그아웃 추가할 것
router.get("/logout", isLoggedIn, logout);

module.exports = router;
