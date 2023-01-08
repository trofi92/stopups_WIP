const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const index = require("./routes/index");
const page = require("./routes/page");
const payment = require("./routes/payment");
const auth = require("./routes/auth");
const myInfo = require("./routes/myInfo");
const bookmarks = require("./routes/bookmarks");
const order = require("./routes/order");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output");

const { sequelize } = require("./models");
const authJwt = require("./middlewares/authJwt");

const app = express();
app.use(helmet());
app.use(
  cors({
    // true = * =>credentials가 true(=include)일 경우
    // origin은 *을 제외한 상세설정을 필요로 함
    origin: true,
    credentials: true,
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
app.use("/page", page);
app.use("/auth", auth);
app.use("/", index);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/order", order);
app.use(authJwt);
app.use("/bookmarks", bookmarks);
app.use("/payment", payment);
app.use("/myInfo", myInfo);

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
