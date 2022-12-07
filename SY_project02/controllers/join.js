const User = require("../models/User");

const join = async (req, res, next) => {
  const { eEmail, eName, eNickname, ePassword, eTelephone } =
    req.body.data;
  try {
    // 이미 있는 이메일인지 확인
    const exUser = await User.findOne({
      where: { email: req.body.data.eEmail },
    });
    if (exUser) {
      console.log("이미 있는 이메일 입니다.");
      return res.redirect("/join?error=exist");
    }
    await User.create({
      email: req.body.data.eEmail,
      name: req.body.data.eName,
      nickname: req.body.data.eNickname,
      password: req.body.data.ePassword,
      telephone: req.body.data.eTelephone,
    });
    console.log("회원가입 성공");
    return res.status(200).send("회원가입 성공");
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

module.exports = {
  join,
};
