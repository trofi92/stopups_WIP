const Sequelize = require("sequelize");

module.exports = class Order extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
        },
        address: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        total: {
          //총 결제 금액
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "Order",
        tableName: "orders",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Order.belongsTo(db.User, { foreignKey: "userId" });
    db.Order.hasMany(db.OrderItem, { foreignKey: "orderId" });
    // db.Order.belongsToMany(db.Payment, {
    //   through: "checkouts",
    // });
  }
};
