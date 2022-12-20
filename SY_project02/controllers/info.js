const User = require("../models/User");
const { decrypt, encrypt } = require("../middlewares/crypto");

const info = async (req, res, next) => {
  const uTelephone = Object.keys(req.body)[0];
  const exUser = await User.findAll({
    attributes: ["email", "name", "nickname", "telephone"],
  });

  try {
    exUser.find((element) => {
      if (uTelephone !== decrypt(element.telephone)) {
        return res.status(401).json({
          status: "유저없음",
        });
      }
      next();

      return res.status(200).json({
        email: element.email,
        name: element.name,
        password: element.password,
        nickname: element.nickname,
        telephone: element.telephone,
      });
    });
  } catch (error) {
    console.error(error);
  }
};

const updatePw = async (req, res, next) => {
  const encryptedEmail = req?.body?.data?.encryptedEmail;
  const clientPassword = req?.body?.data?.currentPassword;
  const newPassword = req?.body?.data?.newPassword;

  const user = await User.findUser(encryptedEmail);
  const userPw = decrypt(user.password);

  console.log(clientPassword);
  console.log(userPw);
  if (userPw !== clientPassword) {
    return res.status(401).json({
      message: "현재 비밀번호를 다시 확인해주세요",
    });
  }
  user.update(
    { password: encrypt(newPassword) },
    { where: { email: encryptedEmail } }
  );
  return res.status(200).json({
    message: "비밀번호를 변경했습니다. 다시 로그인 해주세요",
  });
};

const updatePhoneAndNickname = async (res, req, next) => {};

module.exports = { info, updatePw, updatePhoneAndNickname };
