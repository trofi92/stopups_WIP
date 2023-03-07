const { User, Bookmark, Product } = require("../models");

const errorHandler = (data) => {
  if (!data) {
    return res
      .status(400)
      .json({ message: "처리할 수 없는 요청입니다." });
  }
};

const addBookmarks = async (req, res, next) => {
  const data = req?.body?.data;
  errorHandler(res, data);
  const reqUser = data.email;
  const user = await User.findUser(reqUser);
  const userId = user?.dataValues?.id;

  const findProductId = await Product.findOne({
    where: { pId: data?.pId },
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
    await Bookmark.findOrCreate({
      where: {
        userId: userId,
        productId: pId,
      },
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
  return res.status(200).json({
    message: "나만의 메뉴에 추가되었습니다",
  });
};

const sendBookmarks = async (req, res, next) => {
  const data = req?.body?.data;
  const reqUser = data.email;
  const user = await User.findUser(reqUser);
  const userId = user?.dataValues?.id;

  try {
    errorHandler(res, data);
    const bookmarkedProducts = await Bookmark.findAll({
      include: [
        {
          model: Product,
          attributes: ["id", "name", "p_id"],
        },
      ],
      where: { userId: userId },
    });

    return res.status(200).json({ bookmarkedProducts });
  } catch (error) {
    console.error(error);
    return res.status(404).json({ message: error });
  }
};

const deleteBookmarks = async (req, res, next) => {
  const data = req?.body?.data;
  const email = data?.email;
  const items = data?.items;
  const user = await User.findUser(email);

  try {
    errorHandler(res, data);
    for (let i = 0; i <= items.length - 1; i++) {
      const findProductId = await Product.findOne({
        where: { pId: items[i] },
      });
      await Bookmark.destroy({
        where: { userId: user.id, productId: findProductId.id },
      });
    }
  } catch (error) {
    console.log(error);
  }
  return res
    .status(200)
    .json({ message: "목록에서 아이템이 삭제되었습니다" });
};

module.exports = { addBookmarks, sendBookmarks, deleteBookmarks };
