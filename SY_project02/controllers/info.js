const User = require("../models/User");
const { decrypt } = require("../middlewares/crypto");

const info = async (req, res, next) => {
  const phoneNumber = Object.keys(req.body)[0];
  console.log(phoneNumber);
  const exUser = await User.findAll({
    attributes: ["email", "name", "nickname", "telephone"],
  });

  try {
    exUser.find((element) => {
      if (phoneNumber !== decrypt(element.telephone)) {
        return res.status(401).json({
          status: "유저없음",
        });
      }
      next();
      console.log(element);
      return res.json({
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

module.exports = info;
