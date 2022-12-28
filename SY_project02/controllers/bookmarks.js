const { User, Bookmark, Product } = require("../models");
const { decrypt, encrypt } = require("../middlewares/crypto");

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
  const createWhatDateTime = data.whatDateTime;
  const updateWhatDateTime = data.whatDateTime;

  await Bookmark.findOrCreate({
    where: { userId: userId, productId: pId, price: price },
    defaults: {
      userId: userId,
      productId: pId,
      size: size,
      price: price,
      category: category,
      drinkType: drinkType,
      eatType: eatType,
      createdAt: createWhatDateTime,
      updatedAt: updateWhatDateTime,
    },
  }).catch((err) => {
    console.error(err);
  });
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
};

module.exports = { addBookmarks, sendBookmarks };
