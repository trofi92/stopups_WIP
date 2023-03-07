const User = require("../models/User");

const join = async (req, res, next) => {
  const reqData = req?.body?.data;

  try {
    const exUser = await User.findUser(reqData?.eEmail);
    if (exUser) {
      return res.redirect("/join?error=exist");
    }
    await User.create({
      email: reqData?.eEmail,
      name: reqData?.eName,
      nickname: reqData?.eNickname,
      password: reqData?.ePassword,
      telephone: reqData?.eTelephone,
    });
    return res.status(200).send("회원가입 성공");
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

module.exports = {
  join,
};
