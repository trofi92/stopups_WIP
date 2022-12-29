const { User, Bookmark, Product } = require("../models");
// const { decrypt, encrypt } = require("../middlewares/crypto");

const errorHandler = (data) => {
  if (!data) {
    return res
      .status(400)
      .json({ message: "처리할 수 없는 요청입니다." });
  }
};

const addBookmarks = async (req, res, next) => {
  const data = req?.body?.data;
  console.log(data);

  const reqUser = data.email;
  const user = await User.findUser(reqUser);
  const userId = user?.dataValues?.id;

  const findProductId = await Product.findOne({
    where: { pId: data.pId },
  });
  const pId = findProductId?.id;
  const category = data.category;
  const size = data.size;
  const price = data.price;
  const eatType = data.eatType;
  const drinkType = data.drinkType;
  const cookType = data.cookType;
  const createWhatDateTime = data.whatDateTime;
  const updateWhatDateTime = data.whatDateTime;

  try {
    errorHandler(data);
    await Bookmark.findOrCreate({
      where: { userId: userId, productId: pId, price: price },
      defaults: {
        userId: userId,
        productId: pId,
        size: size,
        price: price,
        cookType: cookType,
        category: category,
        drinkType: drinkType,
        eatType: eatType,
        createdAt: createWhatDateTime,
        updatedAt: updateWhatDateTime,
      },
    });
  } catch (error) {
    console.error(error);
  }
  res.status(200).json({
    message: "나만의 메뉴에 추가되었습니다",
  });
};

const sendBookmarks = async (req, res, next) => {
  const data = req?.body?.data;
  console.log(data);

  const reqUser = data.email;
  const user = await User.findUser(reqUser);
  const userId = user?.dataValues?.id;

  try {
    errorHandler(data);
    const bookmarkedProducts = await Bookmark.findAll({
      where: { userId: userId },
      include: [
        {
          model: Product,
          attributes: ["id", "name", "p_id"],
        },
      ],
    });
    console.log(bookmarkedProducts);
    res.json({ bookmarkedProducts });
    return;
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: "처리할 수 없는 요청입니다." });
  }
};

const deleteBookmarks = async (req, res, next) => {
  const data = req?.body?.data;
  const email = data?.email;
  const pIds = data?.pIds;
  const user = User.findUser(email);
  console.log(email, pIds);

  // for (let i = 0; i <= pIds.length; i++) {
  //   await Bookmark.destroy({
  //     where: { userId: user.id,productId:pIds[i] },
  //   });
  // }

  res.status(204).json({ message: "미완성임 ㅅㄱ" });
};

module.exports = { addBookmarks, sendBookmarks, deleteBookmarks };
