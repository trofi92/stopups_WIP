const express = require("express");
const authJwt = require("../middlewares/authJwt");
const { join } = require("../controllers/join");
const { login, logout } = require("../controllers/login");

const router = express.Router();

router.post("/join", join);

router.post("/login", login);

router.get("/logout", logout);

module.exports = router;
