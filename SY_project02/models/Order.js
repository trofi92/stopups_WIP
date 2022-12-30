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
        orderId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "orders",
            key: "id",
          },
        },
        total: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        address: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
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
    db.Order.belongsToMany(db.Payment, {
      through: "checkouts",
    });
  }
};
