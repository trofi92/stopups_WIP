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

        // 인증이 실패했거나 유저 데이터가 없다면 에러 발생

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
            console.error("로그인에 loginError=>", loginError);
            return res.status(400).send({ loginError });
          }
        });
        // JWT생성 후 클라이언트에게 반환
        const token = jwt.sign(
          { id: user.email, name: user.name, auth: user.auth },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        // res.cookie("jwt", jwt, { httpOnly: true, secure: true });
        return res.status(200).json({ token });
      } catch (err) {
        console.error(err);
      }
    }
  )(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
};

module.exports = { login };

//  req.login(payload, {session: false}, (error) => {
//         if (error) {
//           res.status(400).send({ error });
//         }

//         /** generate a signed json web token and return it in the response */
//         const token = jwt.sign(JSON.stringify(payload), keys.secret);

//         /** assign our jwt to the cookie */
//         res.cookie('jwt', jwt, { httpOnly: true, secure: true });
//         res.status(200).send({ username });
