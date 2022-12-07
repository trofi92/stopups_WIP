const Sequelize = require("sequelize");

module.exports = class OrderItem extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "OrderItem",
        tableName: "orderItems",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.OrderItem.belongsTo(db.Product, {
      foreignKey: "productId",
    });
    db.OrderItem.belongsTo(db.Order);
  }
};
