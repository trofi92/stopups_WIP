const { User, Product, Order, OrderItem } = require("../models");

const order = async (req, res, next) => {
  const data = req?.body;
  const cartItems = data?.cart?.cartItems;
  const user = await User.findUser(data?.email);

  try {
    await Order.create({
      userId: user?.id,
      address: data?.address,
      total: data?.total,
    });

    const findOrder = await Order.findAll({
      where: { userId: user?.id },
    });

    for (let i = 0; i <= cartItems?.length - 1; i++) {
      const findProduct = await Product.findOne({
        where: { pId: cartItems[i]?.id },
      });
      await OrderItem.create({
        orderId: findOrder[findOrder?.length - 1]?.id,
        productId: findProduct?.dataValues?.id,
        price: cartItems[i]?.price,
        quantity: cartItems[i]?.quantity,
        size: cartItems[i]?.size || null,
        category: cartItems[i]?.category,
        drinkType: cartItems[i]?.ice || null,
        eatType: cartItems[i]?.takeout,
        cookType: cartItems[i]?.cooked,
      });
    }

    return res.status(200).json({
      orderId: findOrder[findOrder?.length - 1]?.id,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: "주문과정에 문제가 발생했습니다." });
  }
};

const orderedItems = async (req, res, next) => {
  const reqData = req?.body;
  console.log("orderId ====>", reqData?.orderId);
  try {
    const orderedItemsList = await OrderItem.findAll({
      include: [
        {
          model: Product,
          attributes: ["id", "name", "p_id"],
        },
      ],
      where: {
        orderId: reqData?.orderId,
      },
    });

    return res.status(200).json({ orderedItemsList });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: "처리할 수 없는 요청입니다." });
  }
};

module.exports = { order, orderedItems };
