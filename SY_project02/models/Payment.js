const Sequelize = require("sequelize");

module.exports = class Payment extends Sequelize.Model {
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
        provider: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        method: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        total: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: true,
        },
        paymentKey: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        paymentType: {
          type: Sequelize.STRING(20),
          allowNull: true,
        },
        status: {
          type: Sequelize.STRING(10),
          allowNull: true,
        },
        createdAt: {
          type: Sequelize.STRING(100),
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "Payment",
        tableName: "payments",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Payment.belongsTo(db.Order, {
      foreignKey: "orderId",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  }
};
