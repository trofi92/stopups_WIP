require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const {
  accessTokenCookieOption,
  refreshTokenCookieOption,
} = require("../controllers/auth-options");

const authJwt = async (req, res, next) => {
  const accessToken = req?.cookies?.accessJwtToken;
  const refreshToken = req?.cookies?.refreshJwtToken;

  const handleTokenRefresh = () => {
    try {
      const newAccessToken = jwt.sign({ refreshToken }, jwtSecret, {
        expiresIn: "1h",
      });
      res.cookie(
        "accessJwtToken",
        newAccessToken,
        accessTokenCookieOption
      );
    } catch (err) {
      console.error(err);
    }
  };

  try {
    const decoded = jwt.verify(accessToken, jwtSecret);

    if (!accessToken) {
      return res.status(401).json({
        message: "토큰이 만료되었습니다. 다시 로그인해주세요",
      });
    }

    //재발급
    const now = Math.floor(Date.now() / 1000);
    // 1주일의 유효기간을 지닌 새로운 쿠키 발급
    if (decoded.exp - now < 60 * 60 && refreshToken) {
      const decodedRefresh = jwt.verify(refreshToken, jwtSecret);
      console.log(decodedRefresh);
      const newAccessToken = jwt.sign(decodedRefresh, jwtSecret);
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
    handleTokenRefresh();

    if (err) {
      console.error(err);
      res.status(500).send({
        message: "예기치 않은 에러가 발생했습니다.",
      });
    }
  }
};

module.exports = authJwt;
