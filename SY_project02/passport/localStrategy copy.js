const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const decrypt = require("../middlewares/crypto");
const redisClient = require("../utils/redis.util");
const jwt = require("../utils/jwt.util");
//iu-corner.tistory.com/entry/Node-Express%EC%97%90%EC%84%9C-JWT-%EC%9D%B8%EC%A6%9D-%EB%B0%A9%EC%8B%9D-%EC%A7%81%EC%A0%91-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-Access-Token-Refresh-Token
https: module.exports = () => {
  let auth_password = "";
  passport.use(
    "local",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        session: false,
      },
      async (email, password, done) => {
        await User.findOne({
          where: { email: email },
        }).then((res) => {
          if (!res) {
            info.message = "존재하지 않는 유저입니다.";
            return res.status(200).json({
              status: 403,
              info: info,
            });
          } else {
            auth_password = res.password;
            if (auth_password === decrypt(password)) {
              const accessToken = jwt.sign(res.email);
              const refreshToken = jwt.refresh();

              redisClient.set(res.email, refreshToken);

              info.message = "success";
              res.setHeader(
                "Content-Type",
                "application/json; charset=utf-8"
              );
              res.setHeader("Authorization", "Bearer " + accessToken);
              res.setHeader("Refresh", "Bearer " + refreshToken);
              return res.status(200).json({
                status: 200,
                info: info,
                token: {
                  accessToken: accessToken,
                  refreshToken: refreshToken,
                },
              });
            } else {
              info.message = "비밀번호가 일치하지 않습니다.";
              return res.status(200).json({
                status: 403,
                info: info,
              });
            }
          }
        });
      }
    )
  );
};
