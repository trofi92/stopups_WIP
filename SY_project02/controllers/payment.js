const got = require("got");
const secretKey = process.env.SECRET_KEY;
const { User, Payment, Order, OrderItem } = require("../models");

const payments = async (req, res, next) => {
  const reqData = req?.body?.res?.data?.data;
  const reqEmail = req?.body?.email;
  const user = await User.findUser(reqEmail);

  try {
    const orderList = await Order.findAll({
      where: { userId: user?.id },
    });
    const findOrderId = orderList[orderList?.length - 1].id;
    await Payment.create({
      orderId: findOrderId,
      provider: reqData?.card?.provider,
      method: reqData?.method,
      total: reqData?.totalAmount,
      paymentKey: reqData?.paymentKey,
      paymentType: reqData?.easyPay,
      status: reqData?.status,
      createdAt: reqData?.approvedAt,
    });

    const orderItemList = await OrderItem.findAll({
      where: { orderId: findOrderId },
    });

    return res.status(200).json({
      orderItemList,
      message: "고객님의 주문을 조회하기 위한 번호입니다",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "잘못된 요청입니다" });
  }
};

const success = async (req, res, next) => {
  try {
    await got
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
      .then((response) => {
        res.status(200).json({
          data: response?.body,
          message: "성공적으로 구매했습니다",
          amount: response.body.totalAmount,
        }),
          next();
      });
  } catch (error) {
    console.error(error);
    return res.status(403).json({
      data: res?.body,
      message: "결제가 취소되었습니다. 다시 시도해주세요",
    });
  }
};

const failed = async (req, res, next) => {
  return res.json({
    message: req?.query?.message,
    code: req?.query?.code,
  });
};

module.exports = { payments, success, failed };
