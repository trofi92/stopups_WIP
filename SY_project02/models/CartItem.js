const Sequelize = require("sequelize");

module.exports = class CartItem extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        quantity: {
          type: Sequelize.DECIMAL(11, 0).UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "CartItem",
        tableName: "cartItems",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.CartItem.belongsTo(db.Cart, { foreignKey: "cartId" });
    db.CartItem.belongsTo(db.Product, { foreignKey: "productId" });
  }
};
