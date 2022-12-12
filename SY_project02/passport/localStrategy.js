const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const { decrypt } = require("../middlewares/crypto");

module.exports = () => {
  passport.use(
    "local",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        session: true,
      },
      async (email, password, done) => {
        try {
          const exUser = await User.findAll({
            attributes: ["email", "name", "password"],
          });
          exUser.find((element) => {
            if (email === decrypt(element.email)) {
              if (exUser) {
                const result = password === decrypt(element.password);
                console.log("로컬에 비밀번호 비교 결과 =>", result);
                if (result) {
                  console.log("로컬에 유저 O->", result);
                  done(null, element);
                  return;
                } else {
                  console.log("로컬에 비밀번호 ->", result);
                  done(null, false, {
                    message: "비밀번호가 일치하지 않습니다.",
                  });
                }
              } else {
                console.log("로컬에 유저 X->", result);
                done(null, false, {
                  message: "가입되지 않은 회원입니다.",
                });
              }
            }
          });
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
