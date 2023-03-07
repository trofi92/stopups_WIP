const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");
const Bookmark = require("../models/Bookmark");

router.put("/test", async (req, res, next) => {
  const user = await User.findAll({});
  const bookmarked = await Bookmark.findAll({});
  // const product = await sequelize.query(
  //   "SELECT `User`.`id`, `User`.`email`, `User`.`name`, `User`.`nickname`, `User`.`provider`, `User`.`sns_id` AS `snsId`, `User`.`password`, `User`.`telephone`, `User`.`created_at` AS `createdAt`, `User`.`updated_at` AS `updatedAt`, `User`.`deleted_at` AS `deletedAt`, `Products`.`id` AS `Products.id`, `Products`.`name` AS `Products.name`, `Products`.`p_id` AS `Products.pId`, `Products`.`quantity` AS `Products.quantity`, `Products`.`category` AS `Products.category`, `Products`.`created_at` AS `Products.createdAt`, `Products`.`updated_at` AS `Products.updatedAt`, `Products->bookmarks`.`created_at` AS `Products.bookmarks.createdAt`, `Products->bookmarks`.`updated_at` AS `Products.bookmarks.updatedAt`, `Products->bookmarks`.`user_id` AS `Products.bookmarks.UserId`, `Products->bookmarks`.`product_id` AS `Products.bookmarks.ProductId` FROM `users` AS `User` LEFT OUTER JOIN ( `bookmarks` AS `Products->bookmarks` INNER JOIN `products` AS `Products` ON `Products`.`id` = `Products->bookmarks`.`product_id`) ON `User`.`id` = `Products->bookmarks`.`user_id` WHERE (`User`.`deleted_at` IS NULL AND `User`.`id` = 1);"
  //   // "SELECT * FROM `bookmarks`"
  // );

  // await user.addBookmark(product);

  // res.send({ message: "test11111" });
  // next();

  // const bookmarks = [
  //   { userId: 1, productId: 4 },
  //   { userId: 1, productId: 5 },
  //   { userId: 1, productId: 6 },
  // ];

  // await Bookmark.bulkCreate(bookmarks, {
  //   updateOnDuplicate: ["userId", "productId"],
  // });

  const bookmarkedProducts = await Bookmark.findAll({
    where: { userId: 1 },
    include: [
      {
        model: Product,
        attributes: ["id", "name", "p_id"],
      },
      {
        model: User,
        attributes: ["id", "email", "name", "nickname"],
      },
    ],
  });

  // const user = await User.findByPk(1); // find user with id 1
  // const bookbook = await user.getBookmarks(); // get user's bookmarks
  // console.log(bookbook); // [Product1, Product2, Product3]
  // // const bookbook = Bookmark.findAll({});
  res.json({
    bookmark: bookmarkedProducts,
  });
  // console.log(bookmarkedProducts);
});

router.get("/login", (req, res, next) => {
  res.send({ message: "login" });
  next();
});
router.get("/users", async (req, res, next) => {
  res.json([
    { id: 1, username: "fuck react" },
    { id: 2, username: "hate css" },
  ]);
  console.log(res.json);
  next();
});

module.exports = router;
