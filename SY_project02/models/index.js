"use strict";

const Sequelize = require("sequelize");
const process = require("process");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const User = require("./User");
const Product = require("./Product");
const Payment = require("./Payment");
const OrderItem = require("./OrderItem");
const Order = require("./Order");
const Bookmark = require("./Bookmark");

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.User = User;
db.Product = Product;
db.Payment = Payment;
db.OrderItem = OrderItem;
db.Order = Order;
db.Bookmark = Bookmark;

User.init(sequelize);
Product.init(sequelize);
Payment.init(sequelize);
OrderItem.init(sequelize);
Order.init(sequelize);
Bookmark.init(sequelize);

User.associate(db);
Product.associate(db);
Payment.associate(db);
OrderItem.associate(db);
Order.associate(db);
Bookmark.associate(db);

module.exports = db;
