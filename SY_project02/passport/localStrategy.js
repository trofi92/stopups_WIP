const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { ExtractJwt, Strategy: JWTStrategy } = require("passport-jwt");
const User = require("../models/User");
const decrypt = require("../middlewares/crypto");

module.exports = () => {
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromHeader("authorization"),
        secretOrKey: process.env.JWT_SECRET,
      },
      async (jwtPayload, done) => {
        try {
          // payload의 id값으로 유저의 데이터 조회
          const user = await User.findOne({
            where: { id: jwtPayload.email },
          });
          // 유저 데이터가 있다면 유저 데이터 객체 전송
          if (user) {
            done(null, user);
            return;
          }
          // 유저 데이터가 없을 경우 에러 표시
          done(null, false, {
            reason: "올바르지 않은 인증정보 입니다.",
          });
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const exUser = await User.findAll();
          exUser.find((element) => {
            if (email === decrypt(element.email)) {
              if (exUser) {
                const result = password === decrypt(element.password);
                console.log(
                  "로컬에 비밀번호 비교 결과 result=>",
                  result
                );
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
                console.log("로컬에 유저 X->");
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
