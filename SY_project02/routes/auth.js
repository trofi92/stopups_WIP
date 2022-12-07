const express = require("express");
const passport = require("passport");

const {
  isLoggedIn,
  isNotLoggedIn,
} = require("../middlewares/loggedIn");
const { join } = require("../controllers/join");
const { login } = require("../controllers/login");

const router = express.Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      res.json({ result: true });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);
router.post("/join", isNotLoggedIn, join);
router.post("/login", isNotLoggedIn, login);

//로그아웃 추가할 것
router.get("/logout", isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

// router.get("/kakao", passport.authenticate("kakao"));
// router.get(
//     "/kakao/callback",
//     passport.authenticate("kakao", {
//       failureRedirect: "/",
//     }),
//     (req, res) => {
//       res.redirect("/");
//     }
// );

module.exports = router;
