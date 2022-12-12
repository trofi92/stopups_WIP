require("dotenv").config();
const jwt = require("jsonwebtoken");
const { secret, option } = require("../controllers/login");

const authJwt = async (req, res, next) => {
  const token = req?.cookies?.accessJwtToken;
  console.log(req?.cookies?.accessJwtToken);

  if (!token) return console.log("expired");

  try {
    const decoded = jwt.verify(token, secret);
    //바깥으로 verify 내용을 export하기 위한 req.app.locals메소드 사용
    const decodedInfo = (req.app.locals = {
      id: decoded.id, //email
      name: decoded.name, //username
    });

    //재발급
    const now = Math.floor(Date.now() / 1000);
    // 3일의 유효기간을 지닌 새로운 쿠키 발급
    if (decoded.exp - now < 60 * 60) {
      const token = jwt.sign(decodedInfo, secret, {
        expiresIn: "2h", // 만료시간
      });
      res.cookie("accessJwtToken", token, option);
    }
    return next();
  } catch (err) {
    console.error(err);
    return next();
  }
};

module.exports = authJwt;
