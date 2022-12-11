// const jwt = require("jsonwebtoken");

// exports.verifyToken = async (req, res, next) => {
//   const headers = req.headers;
//   if (!headers.hasOwnProperty("authorization")) {
//     return res.status(200).json({
//       status: 403,
//       success: false,
//       message: "로그인이 필요합니다.",
//     });
//   }
//   const token =
//     req.headers.authorization.split("Bearer ")[1] ||
//     req.headers["x-access-token"];
//   if (!token || token === "null") {
//     return res.status(200).json({
//       status: 403,
//       success: false,
//       message: "로그인이 필요합니다.",
//     });
//   }
//   // 토큰이 유효한지 검증

//   let info = {
//     type: false,
//     message: "",
//   };

//   const p = new Promise((resolve, reject) => {
//     jwt.verify(token, "jwt-secret-key", (err, decoded) => {
//       if (err) {
//         // 토큰이 일치하지 않음.
//         console.error(err);
//         info.type = false;
//         info.message = "토큰이 일치하지 않습니다.";
//         return res.status(200).json({
//           status: 403,
//           success: false,
//           info: info,
//         });
//       }
//       resolve(decoded);
//     });
//   });

//   p.then((decoded) => {
//     req.decoded = decoded;
//     next();
//   });
// };

require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = "../models/User.js";

const authJwt = async (req, res, next) => {
  const token = req.cookies.accessJwtToken;
  console.log(req.cookies.accessJwtToken);

  if (!token) return next();
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    //바깥으로 verify 내용을 export하기 위한 req.app.locals메소드 사용
    const decodedInfo = (req.app.locals = {
      id: decoded.id, //email
      name: decoded.name, //username
    });
    console.log(decoded.exp);

    //재발급
    const now = Math.floor(Date.now() / 1000);
    // 사용자에게 발급된 쿠키의 유효기간이 3.5일 미만으로 남은 경우
    // 7일의 유효기간을 지닌 새로운 쿠키 발급
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const token = jwt.sign(decodedInfo, process.env.JWT_SECRET, {
        expiresIn: "7d", // 만료시간
      });
      res.cookie("accessJwtToken", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
        overwrite: true,
      });
    }
    return next();
  } catch (err) {
    console.error(err);
    return next();
  }
};

module.exports = authJwt;
