const Sequelize = require("sequelize");

module.exports = class OrderItem extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        orderId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "orders",
            key: "id",
          },
        },
        productId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "products",
            key: "id",
          },
        },
        price: {
          type: Sequelize.STRING(400),
          allowNull: true,
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        size: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        category: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        drinkType: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        eatType: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        cookType: {
          type: Sequelize.STRING(200),
          allowNull: true,
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
    db.OrderItem.belongsTo(db.Order, {
      foreignKey: "orderId",
    });
  }
};
