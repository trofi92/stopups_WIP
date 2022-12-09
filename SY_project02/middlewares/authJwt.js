require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = "../models/User.js";

const authJwt = async (req, res, next) => {
  const token = req.cookies.accessJwtToken;
  // console.log(req.cookies.accessJwtToken);

  if (!token) return next();
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.app.locals = {
      id: decoded.id, //email
      name: decoded.name, //username
    };
    // console.log(req.app.locals);

    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const user = await User.findOne(decoded.id);
      const token = jwt.sign(
        {
          id: user,
          name: decoded.name,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d", // 만료시간 12시간
        }
      );
      res.cookie("accessJwtToken", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      });
    }

    return next();
  } catch (err) {
    console.error(err);
    return next();
  }
};

module.exports = authJwt;
