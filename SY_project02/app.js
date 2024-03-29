const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const payment = require("./routes/payment");
const auth = require("./routes/auth");
const myInfo = require("./routes/myInfo");
const bookmarks = require("./routes/bookmarks");
const order = require("./routes/order");

const { sequelize } = require("./models");
const authJwt = require("./middlewares/authJwt");

const app = express();
app.use(helmet());

const domains = ["https://www.stopups.shop", "https://stopups.shop"];
app.use(
  cors({
    origin: function (origin, callback) {
      const isTrue = domains.indexOf(origin) !== -1;
      callback(null, isTrue);
    },
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.set("port", process.env.PORT || 8001);

sequelize
  .sync({ alter: false, force: false })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use("/auth", auth);
app.use("/myInfo", myInfo);
app.use(authJwt);
app.use("/payment", payment);
app.use("/order", order);
app.use("/bookmarks", bookmarks);

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.status(404, {
    code: "UNKNOWN_ERROR",
    message: "알 수 없는 에러가 발생했습니다.",
  });
});

module.exports = app;
