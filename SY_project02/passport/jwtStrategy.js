const User = require("../models/User");
const passport = require("passport");
const {
  ExtractJwt: ExtractJwt,
  Strategy: JWTStrategy,
} = require("passport-jwt");
const decrypt = require("../middlewares/crypto");
// const cookieExtractor = (req) => {
//   const { token } = req.cookies;
//   return token;
// };

module.exports = () => {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        // jwtFromRequest:
        //   ExtractJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
        // jwtFromRequest: cookieExtractor,
        jwtFromRequest: ExtractJwt.fromHeader("authorization"),
        secretOrKey: process.env.JWT_SECRET,
      },
      async (jwtPayload, done) => {
        try {
          // payload의 email값으로 유저의 데이터 조회
          const user = await User.findOne({
            where: { email: jwtPayload.email },
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
