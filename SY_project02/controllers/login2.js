const User = require("../models/User");
const { decrypt, encrypt } = require("../middlewares/crypto");
const redisClient = require("../utils/redis.util");
const jwt = require("../utils/jwt.util");
const crypto = require("crypto");

exports.login2 = async (req, res, next) => {
  console.log(req?.body);
  // console.log(
  //   await User.findOne({
  //     attributes: ["email", "password"],
  //   })
  // );

  // if (
  //   req.body.constructor === Object &&
  //   Object.keys(req.body).length === 0
  // ) {
  //   return res.status(200).json({
  //     status: 400,
  //     message: "Error: Body(JSON)값이 비어있습니다.",
  //   });
  // }

  // if (
  //   req.body.hasOwnProperty("email") === false ||
  //   req.body.hasOwnProperty("password") === false
  // ) {
  //   return res.status(200).json({
  //     status: 400,
  //     message: "Error: 이메일 또는 비밀번호가 없습니다.",
  //   });
  // }

  const { email, password } = req.body;
  let info = { type: false, message: "" };

  let auth_password = "";

  crypto
    .createHash("sha256")
    .update(req.body.password)
    .digest("base64");

  let hex_password = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  await User.findOne({
    where: { email: email },
  })
    .then((response) => {
      if (!response) {
        info.message = "존재하지 않는 유저입니다.";
        return res.status(200).json({
          status: 403,
          info: info,
        });
      } else {
        auth_password = response.password;
        if (hex_password === auth_password) {
          const accessToken = jwt.sign(response.email);
          const refreshToken = jwt.refresh();

          redisClient.set(response.email, refreshToken);

          info.message = "success";
          res.setHeader(
            "Content-Type",
            "application/json; charset=utf-8"
          );
          res.setHeader("Authorization", "Bearer " + accessToken);
          res.setHeader("Refresh", "Bearer " + refreshToken);
          return res.status(200).json({
            status: 200,
            info: info,
            token: {
              accessToken: accessToken,
              refreshToken: refreshToken,
            },
          });
        } else {
          info.message = "비밀번호가 일치하지 않습니다.";
          return res.status(200).json({
            status: 403,
            info: info,
          });
        }
      }
    })
    .catch((err) => {
      info.message = "로그인 실패 : " + err;
      return res.status(200).json({
        status: 500,
        info: info,
      });
    });
};
