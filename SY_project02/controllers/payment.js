const got = require("got");
const secretKey = process.env.SECRET_KEY;

const payment = (req, res, next) => {
  console.log("payment");
  res.send({
    message: "payment",
  });
  next();
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
      Payment.create;
    })
    .then(function (res) {
      return res.status(200).send(body);
    })

    .catch((err) => {
      console.error(err);
    });

  next(err);
};

const failed = (req, res, next) => {
  console.log("failed");
  res.send({
    message: req.query.message,
    code: req.query.code,
  });
  next();
};

module.exports = { payment, success, failed };
