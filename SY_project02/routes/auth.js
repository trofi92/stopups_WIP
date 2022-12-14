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

router.get("/logout", isLoggedIn, logout);

module.exports = router;
