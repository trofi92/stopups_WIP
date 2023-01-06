const express = require("express");
const { join } = require("../controllers/join");
const {
  login,
  logout,
  checkDuplication,
  userDelete,
} = require("../controllers/auth");
const authJwt = require("../middlewares/authJwt");

const router = express.Router();

router.post("/join", join);

router.post("/userDelete", userDelete);

router.post("/login", login, authJwt);

router.post("/logout", logout, authJwt);

router.post("/check", checkDuplication);

module.exports = router;
