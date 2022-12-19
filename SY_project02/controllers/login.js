const passport = require("passport");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const accessJwtTokenOption = {
  maxAge: 1000 * 60 * 60 * 24 * 7, //쿠키 수명 1주일
  httpOnly: true,
  overwrite: true,
  expires: new Date(1), //브라우저 종료시 즉시 삭제
};
const refreshJwtTokenOption = {
  maxAge: 1000 * 60 * 60 * 24 * 7, //쿠키 수명 1주일
  httpOnly: true,
  overwrite: true,
};

const login = async (req, res, next) => {
  const { email, password } = req.body.data;

  req.body.email = email;
  req.body.password = password;

  passport.authenticate(
    "local",
    { session: true },
    (err, user, info) => {
      try {
        // 인증 실패
        if (err) {
          console.error(err);
          return next(err);
        }
        // 유저 없음
        if (!user) {
          return res.status(305).send(`${info.message}`);
        }

        // user데이터를 통해 로그인 진행
        req.login(user, (loginError) => {
          // 비밀번호 에러
          if (loginError) {
            console.error("loginError =>", loginError);
            return res.status(305).send({ loginError });
          }
        });

        const refreshToken = jwt.sign(
          { id: user.id, name: user.name },
          jwtSecret,
          {
            expiresIn: "12h", // 리프레시 토큰 만료 12시간
          }
        );
        res.cookie(
          "refreshJwtToken",
          refreshToken,
          refreshJwtTokenOption
        );

        const token = User.generateJWT(user);

        res.cookie("accessJwtToken", token, accessJwtTokenOption);
        return res.status(200).json({
          code: 200,
          message: "토큰이 발급되었습니다.",
          token: token,
          email: user.email,
          name: user.name,
          nickname: user.nickname,
          telephone: user.telephone,
        });
      } catch (err) {
        console.error(err);
      }
    }
  )(req, res, next);
  // 미들웨어 내의 미들웨어에는 (req, res, next) 삽입
};

const logout = async (req, res, next) => {
  res.cookie("accessJwtToken", {
    maxAge: 0,
  });
  res.cookie("refreshJwtToken", {
    maxAge: 0,
  });
  return res.status(200).json({
    code: 200,
    message: "Successfully logged out",
  });
};

module.exports = { login, logout };
