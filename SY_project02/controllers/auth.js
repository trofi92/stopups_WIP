const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const { decrypt } = require("../middlewares/crypto");
const {
  checkNickname,
  checkPhone,
  checkEmail,
  accessJwtTokenOption,
  refreshJwtTokenOption,
} = require("./auth-options");

//로그인
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

    // console.log(user);

    if (!user) {
      return res
        .status(305)
        .send("유효하지 않은 이메일 혹은 비밀번호 입니다");
    }

    const decryptedPassword = decrypt(user.password);

    if (password !== decryptedPassword) {
      return res
        .status(305)
        .send("유효하지 않은 이메일 혹은 비밀번호 입니다");
    }
    const token = User.generateJWT(user);

    res.cookie("accessJwtToken", token, accessJwtTokenOption);

    const refreshToken = jwt.sign(
      { id: user.id, name: user.name },
      jwtSecret
    );
    res.cookie(
      "refreshJwtToken",
      refreshToken,
      refreshJwtTokenOption
    );

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

//로그아웃
const logout = async (req, res, next) => {
  await res.cookie("accessJwtToken", "", {
    maxAge: 0,
  });
  await res.cookie("refreshJwtToken", "", {
    maxAge: 0,
  });
  return res.status(200).json({
    code: 200,
    message: "정상적으로 로그아웃 되었습니다.",
  });
};

//가입정보 중복체크
const checkDuplication = async (req, res, next) => {
  //요청 데이터
  const reqData = req?.body;
  //응답 메시지
  const messageResponse = (data, msg) => {
    if (!data || undefined || null)
      return res.status(200).json({
        message: `사용 가능한 ${msg} 입니다.`,
      });
    else
      return res
        .status(200)
        .json({ message: `이미 존재하는 ${msg} 입니다.` });
  };

  //이메일 중복
  if (checkEmail(reqData?.email)) {
    const findAllUsers = await User.findAll({
      attributes: ["email"],
    });

    const user = findAllUsers.find(
      (user) => reqData.email === decrypt(user?.email)
    );
    messageResponse(user, "이메일");
  }
  //휴대전화 번호 중복
  if (checkPhone(reqData?.phoneNumber)) {
    const findAllPhoneNumber = await User.findAll({
      attributes: ["telephone"],
    });

    const phoneNumber = findAllPhoneNumber.find(
      (user) => reqData.phoneNumber === decrypt(user?.telephone)
    );
    messageResponse(phoneNumber, "연락처");
  }

  //닉네임 중복
  if (checkNickname(reqData?.nickname)) {
    const findAllNickname = await User.findAll({
      attributes: ["nickname"],
    });

    const nickname = findAllNickname.find(
      (user) => reqData.nickname === decrypt(user?.nickname)
    );
    messageResponse(nickname, "닉네임");
  }
};

module.exports = {
  login,
  logout,
  checkDuplication,
};
