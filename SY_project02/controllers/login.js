const passport = require("passport");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  const { email, password } = req.body.data;
  req.body.email = email;
  req.body.password = password;
  passport.authenticate(
    "local",
    { session: false },
    (authError, user, info) => {
      try {
        console.log("로그인에 authError=>", authError);
        // console.log("로그인에 user=>", user);
        // console.log("로그인에 info=>", info);

        // 인증 실패
        if (authError) {
          console.error(authError);
          return next(authError);
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

        const token = jwt.sign(
          { id: user.email, name: user.name },
          process.env.JWT_SECRET,
          {
            expiresIn: "7d", // 만료시간 7일
          }
        );

        res.cookie("accessJwtToken", token, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          httpOnly: true,
        });
        return res.status(200).json({
          code: 200,
          message: "토큰이 발급되었습니다.",
          token: token,
        });
      } catch (err) {
        console.error(err);
      }
    }
  )(req, res, next);
  // 미들웨어 내의 미들웨어에는 (req, res, next) 삽입
};

const logout = async (req, res, next) => {
  res.cookie("accessJwtToken");
  res.status = 204;
};

// 로그인 확인용 함수(테스트)
const check = async (req, res) => {
  // authJwt에서 감지한 jwt payload가져오기
  const { email } = req.app.locals;
  // console.log(req.app.locals);
  if (!email) {
    //로그인 중이 아님
    return res.status(401);
    //unauthorized
  }
  res.body = email;
  console.log(res.body);
};

module.exports = { login, logout, check };
