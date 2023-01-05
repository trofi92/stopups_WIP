const got = require("got");
const secretKey = process.env.SECRET_KEY;

const payment = async (req, res, next) => {
  console.log(req?.body);
  res.json({
    message: "구매 진행중입니다",
  });
};

const success = async (req, res, next) => {
  console.log("success");
  await got
    .post("https://api.tosspayments.com/v1/payments/" + req.query.paymentKey, {
      headers: {
        Authorization:
          "Basic " + Buffer.from(secretKey + ":").toString("base64"),
        "Content-Type": "application/json",
      },
      json: {
        orderId: req.query.orderId,
        amount: req.query.amount,
      },
      responseType: "json",
    })
    .then((response) => {
      console.log(response?.body);
      // TODO: 구매 완료 비즈니스 로직 구현
      return (
        res.status(200).json(response?.body, {
          message: "성공적으로 구매했습니다",
          amount: response.body.totalAmount,
        }),
        next()
      );
    })

    .catch((error) => {
      console.error(error);
      return res.status(403).json(response?.body, {
        message: "결제가 취소되었습니다. 다시 시도해주세요",
      });
    });
};

const failed = async (req, res, next) => {
  console.log("failed");
  return res.json({
    message: req.query.message,
    code: req.query.code,
  });
};

module.exports = { payment, success, failed };
