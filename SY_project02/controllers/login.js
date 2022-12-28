const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const { decrypt } = require("../middlewares/crypto");
const accessJwtTokenOption = {
  maxAge: 1000 * 60 * 60 * 24 * 7, //쿠키 수명 1주일
  httpOnly: true,
  overwrite: true,
  expires: new Date(Date.now() - 1), //브라우저 종료시 즉시 삭제
};
const refreshJwtTokenOption = {
  maxAge: 1000 * 60 * 60 * 24 * 7, //쿠키 수명 1주일
  httpOnly: true,
  overwrite: true,
};

const login = async (req, res, next) => {
  const { email, password } = req.body.data;

  try {
    const users = await User.findAll({
      attributes: [
        "email",
        "name",
        "nickname",
        "telephone",
        "password",
      ],
    });

    const user = users.find((user) => email === decrypt(user.email));
    const decryptedPassword = decrypt(user.password);

    // console.log(user);

    if (!user) {
      return res
        .status(305)
        .send("이메일이나 비밀번호가 유효하지 않습니다");
    }

    if (password !== decryptedPassword) {
      return res
        .status(305)
        .send("이메일이나 비밀번호가 유효하지 않습니다");
    }

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
    message: "정상적으로 로그아웃 되었습니다.",
  });
};

module.exports = { login, logout };
