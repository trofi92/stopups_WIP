const { User, Bookmark, Product } = require("../models");
// const { decrypt, encrypt } = require("../middlewares/crypto");

//에러 일괄처리
const errorHandler = (res, data) => {
  if (!data) {
    return res
      .status(400)
      .json({ message: "처리할 수 없는 요청입니다." });
  }
};

//찜목록에 상품 추가
const addBookmarks = async (req, res, next) => {
  const data = req?.body?.data;
  const reqUser = data.email;
  const user = await User.findUser(reqUser);
  const userId = user?.dataValues?.id;
  console.log("===========pId=======>", data.pId);

  errorHandler(res, data);

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
    await Bookmark.findOrCreate({
      where: {
        userId: userId,
        productId: pId,
        price: price,
        cookType: cookType,
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

//찜목록 확인 및 전송
const sendBookmarks = async (req, res, next) => {
  const data = req?.body?.data;
  const reqUser = data.email;
  const user = await User.findUser(reqUser);
  const userId = user?.dataValues?.id;
  console.log(data);

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

    console.log(1);
    console.log(bookmarkedProducts);

    return res.status(200).json({ bookmarkedProducts });
  } catch (error) {
    console.error(error);
    return res.status(404).json({ message: error });
  }
};

//찜목록 아이템 삭제
const deleteBookmarks = async (req, res, next) => {
  const data = req?.body?.data;
  const email = data?.email;
  const items = data?.items;
  const user = await User.findUser(email);
  console.log(data);
  console.log("uid ==>", user.id, "pid ==>", items);

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
