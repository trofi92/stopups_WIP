const got = require("got");
const secretKey = process.env.SECRET_KEY;

const payment = (req, res, next) => {
  console.log(req?.body);
  res.json({
    message: "구매 진행중입니다",
  });
};

const success = (req, res, next) => {
  console.log("success");
  got
    .post(
      "https://api.tosspayments.com/v1/payments/" +
        req.query.paymentKey,
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(secretKey + ":").toString("base64"),
          "Content-Type": "application/json",
        },
        json: {
          orderId: req.query.orderId,
          amount: req.query.amount,
        },
        responseType: "json",
      }
    )
    .then(function (res) {
      console.log(res.body);
      // TODO: 구매 완료 비즈니스 로직 구현
    })
    .then(function (res) {
      return res.status(200).json({
        data: res?.body,
        message: "성공적으로 구매했습니다",
        amount: response.body.totalAmount,
      });
    })

    .catch((err) => {
      console.error(err);
      return res.status(403).json({
        data: res?.body,
      });
    });
};

const failed = (req, res, next) => {
  console.log("failed");
  res.json({
    message: req.query.message,
    code: req.query.code,
  });
};

module.exports = { payment, success, failed };
