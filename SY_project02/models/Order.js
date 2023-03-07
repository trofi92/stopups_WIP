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
    db.Order.belongsTo(db.User, {
      foreignKey: "userId",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    db.Order.hasMany(db.OrderItem, {
      foreignKey: "orderId",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  }
};
