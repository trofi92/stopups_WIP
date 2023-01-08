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

    //   console.log("data=====>", findOrder);
    for (let i = 0; i <= cartItems?.length - 1; i++) {
      const findProduct = await Product.findOne({
        where: { pId: cartItems[i]?.id },
      });
      // console.log("data======>", findProduct.dataValues.id);
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
      orderId: findOrder?.length - 1,
      message: "결제에 성공했습니다.",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "결제에 실패했습니다." });
  }
};

module.exports = { order };
