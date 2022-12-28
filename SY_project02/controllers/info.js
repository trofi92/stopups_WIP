const { User, Bookmark, Product } = require("../models");
const { decrypt, encrypt } = require("../middlewares/crypto");

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
    return req.status(204).json({
      message:
        "알 수 없는 오류가 발생했습니다. 메인화면으로 돌아갑니다.",
    });
  }
};

module.exports = { updatePw, updatePhoneAndNickname };
