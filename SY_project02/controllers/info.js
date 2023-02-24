const { User } = require("../models");
const { decrypt, encrypt } = require("../middlewares/crypto");

//비밀번호 변경하기(휴대전화 인증 후 접근)
const updatePw = async (req, res, next) => {
  const encryptedEmail = req?.body?.data?.encryptedEmail;
  const clientPassword = req?.body?.data?.currentPassword;
  const newPassword = req?.body?.data?.newPassword;

  const user = await User.findUser(encryptedEmail);
  const userPw = decrypt(user?.password);

  console.log(clientPassword);
  console.log(userPw);

  if (userPw !== clientPassword) {
    return res.status(200).json({
      message: "현재 비밀번호를 다시 확인해주세요",
    });
  }

  await user.update(
    { password: encrypt(newPassword) },
    { where: { email: encryptedEmail } }
  );
  return res.status(200).json({
    message: "비밀번호를 변경했습니다. 다시 로그인 해주세요",
  });
};

//비밀번호 변경(이메일 && 전화번호 입력 후 변경 폼 접근)
const updatePwWithEmail = async (req, res, next) => {
  const reqData = req?.body;
  const findAllUser = await User.findAll({
    attributes: ["email", "password"],
  });
  const findOneUser = findAllUser.find(
    (user) => reqData.email === decrypt(user?.email)
  );

  //예외 처리
  if (
    !findOneUser ||
    findOneUser === undefined ||
    findOneUser === null
  )
    return res.status(401).json({
      message: "인증에 실패했습니다",
    });
  else
    return res.status(200).json({
      email: findOneUser?.email,
      password: findOneUser?.password,
      message: "인증되었습니다",
    });
};

//비밀번호 변경(변경 요청 처리)
const forgetAndModifyPw = async (req, res, next) => {
  const reqData = req?.body;
  const user = await User.findUser(reqData?.email);
  console.log(user);
  if (!user)
    return res.status(404).json({
      message: "존재하지 않는 유저입니다",
    });

  await user.update(
    {
      password: encrypt(reqData?.password),
    },
    { where: { email: reqData?.email } }
  );
  return res.status(200).json({
    message: "비밀번호를 변경했습니다. 다시 로그인 해주세요",
  });
};

//연락처, 닉네임 변경하기
const updatePhoneAndNickname = async (res, req, next) => {
  console.log(res?.body);
  const encryptedEmail = res?.body?.data?.email;
  const newTelephone = res?.body?.data?.telephone;
  const newNickname = res?.body?.data?.nickname;

  const user = await User.findUser(encryptedEmail);

  try {
    user.update(
      {
        telephone: encrypt(newTelephone),
        nickname: encrypt(newNickname),
      },
      { where: { email: encryptedEmail } }
    );
    return req.status(200).json({
      message: "회원정보가 변경되었습니다. 다시 로그인 해주세요",
    });
  } catch (error) {
    console.log(error);
    return req.status(400).json({
      message:
        "알 수 없는 오류가 발생했습니다. 메인화면으로 돌아갑니다.",
    });
  }
};

//비밀번호로 인증하기
const passwordAuth = async (req, res, next) => {
  const data = req?.body;
  const user = await User.findUser(data?.email);
  console.log(data);
  console.log(decrypt(user.password));
  try {
    if (decrypt(user.password) !== data?.password) {
      return res.status(401).json({
        status: 401,
        userInfo: false,
        message: "입력한 비밀번호를 다시 확인해주세요",
      });
    } else {
      return res.status(200).json({
        message: "비밀번호가 인증되었습니다",
        userInfo: true,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

//아이디 찾기
const findEmailByPhoneNumber = async (req, res, next) => {
  //요청 데이터
  const reqData = req?.body;
  //유저 데이터 가져오기
  const findAllPhoneNumber = await User.findAll({
    attributes: ["email", "telephone"],
  });
  //유저 데이터 찾기
  const phoneNumber = findAllPhoneNumber.find(
    (user) => reqData.phoneNumber === decrypt(user?.telephone)
  );
  //예외 처리
  if (!phoneNumber || undefined || null)
    return res.status(401).json({
      message:
        "인증에 실패했습니다. 입력하신 번호를 다시 확인해주세요",
    });
  else
    return res.status(200).json({
      email: decrypt(phoneNumber?.email),
      message: "인증되었습니다",
    });
};

//회원탈퇴
const deleteUser = async (req, res, next) => {
  const { email, password } = req?.body?.data;
  console.log(decrypt(email), "email", password);

  try {
    const users = await User.findAll({
      attributes: ["email", "password"],
    });
    const user = users.find((user) => email === user.email);
    const decryptedPassword = decrypt(user.password);

    if (password !== decryptedPassword) {
      return res.status(305).send("비밀번호가 일치하지 않습니다.");
    } else {
      res.status(200).send("회원 탈퇴 성공");
      User.destroy({
        where: { email: user.email },
      });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "알 수 없는 문제가 발생했습니다." });
  }
};

module.exports = {
  updatePw,
  updatePhoneAndNickname,
  passwordAuth,
  findEmailByPhoneNumber,
  updatePwWithEmail,
  forgetAndModifyPw,
  deleteUser,
};
