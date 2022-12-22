require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const accessTokenCookieOption = {
  maxAge: 1000 * 60 * 60 * 24 * 7, // 재발급 토큰 쿠키 유지시간 1주일
  httpOnly: true,
  overwrite: true,
  expires: new Date(Date.now() - 1),
};
const refreshTokenCookieOption = {
  maxAge: 1000 * 60 * 60 * 24 * 15, // 리프레시 토큰 쿠키 유지시간 15일
  httpOnly: true,
  overwrite: true,
};

const authJwt = async (req, res, next) => {
  const accessToken = req?.cookies?.accessJwtToken;
  const refreshToken = req?.cookies?.refreshJwtToken;

  // console.log(req?.cookies?.accessJwtToken);

  if (!accessToken) {
    return res.status(401).json({
      message: "토큰이 만료되었거나 발급되지 않았습니다",
    });
  }

  try {
    const decoded = jwt.verify(accessToken, jwtSecret);
    //바깥으로 verify 내용을 export하기 위한 req.app.locals메소드 사용
    req.app.locals = {
      id: decoded.id, //email
      name: decoded.name, //username
    };

    //재발급
    const now = Math.floor(Date.now() / 1000);
    // 1주일의 유효기간을 지닌 새로운 쿠키 발급
    if (decoded.exp - now < 60 * 60 && refreshToken) {
      const decodedRefresh = jwt.verify(refreshToken, jwtSecret);
      const newAccessToken = jwt.sign(decodedRefresh, jwtSecret, {
        expiresIn: "1d", // new access token expiration time
      });
      res.cookie(
        "accessJwtToken",
        newAccessToken,
        accessTokenCookieOption
      );
      res.cookie(
        "refreshJwtToken",
        refreshToken,
        refreshTokenCookieOption
      );
    }
    return next();
  } catch (err) {
    return res.status(401).send({
      message: "토큰 인증에 문제가 있습니다. : " + err.message,
    });
  }
};

module.exports = authJwt;
