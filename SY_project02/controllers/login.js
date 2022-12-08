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
        console.log("로그인에 user=>", user);
        console.log("로그인에 info=>", info);

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

        jwt.sign(
          // 토큰에 담는 정보
          { id: user.email, name: user.name, auth: user.auth },
          process.env.JWT_SECRET,
          { expiresIn: 60 * 60 * 24 * 15 },
          // 토큰 만료 기간 현재 15일
          (err, token) => {
            if (err) {
              throw err;
            }
            res
              .status(200)
              .cookie("user", token) // 'user' 명을 가진 쿠키
              .json({ token });
          }
        );
      } catch (err) {
        console.error(err);
      }
    }
  )(req, res, next);
  // 미들웨어 내의 미들웨어에는 (req, res, next) 삽입
};
module.exports = { login };
// https://awlhdla.tistory.com/144
// https://jrepository.tistory.com/m/65
// https://gaemi606.tistory.com/entry/React-JWT-%EC%95%88%EC%A0%84%ED%95%98%EA%B2%8C-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0-localStorage-%EC%82%AC%EC%9A%A9-X-3
//https://hololo-kumo.tistory.com/236
// /https://dukdukz.tistory.com/entry/210527-%EC%BF%A0%ED%82%A4%ED%86%A0%ED%81%B0-%EC%95%88%EC%97%90-%EC%BF%A0%ED%82%A4-%EC%83%9D%EC%84%B1-%EA%B3%B5%EC%9C%A0

// jwt.sign(
//   {
//     // 토큰에 담는 정보
//     email: email,
//   },
//   process.env.JWT_SECRET,
//   { expiresIn: 60 * 60 * 24 * 15 },
//   // 토큰 만료 기간 15일
//   (err, token) => {
//     if (err) {
//       throw err;
//     }
//     res
//       .status(200)
//       .cookie("user", token, {
//         maxAge: 24 * 60 * 60 * 15,
//         httpOnly: true,
//         secure: true,
//         path: "/",
//       }) // 'user' 명을 가진 쿠키
//       .json({ result: true, msg: "로그인 성공" });
//   }
// );

// const accessToken = jwt.sign(
//   { id: user.email },
//   process.env.JWT_SECRET,
//   {
//     expiresIn: "1d",
//     issuer: "localhost",
//     subject: "user_info",
//   }
// );
// const token = { access_token: accessToken };
// res.cookie("local", token, {
//   secure: true,
//   httpOnly: true,
//   maxAge: 30 * 24 * 60 * 60 * 1000,
// });
// err(res, 200, "", token);s
// }

//  req.login(payload, {session: false}, (error) => {
//         if (error) {
//           res.status(400).send({ error });
//         }

//         /** generate a signed json web token and return it in the response */
//         const token = jwt.sign(JSON.stringify(payload), keys.secret);

//         /** assign our jwt to the cookie */
//         res.cookie('jwt', jwt, { httpOnly: true, secure: true });
//         res.status(200).send({ username });

// const token = jwt.sign(
//   { id: user.email, name: user.name, auth: user.auth },
//   process.env.JWT_SECRET,
//   { expiresIn: "1h" }
// );
// return res.status(200).json({ token });
