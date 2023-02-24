const Sequelize = require("sequelize");

module.exports = class Payment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        orderId: {
          //Order model을 바라보는 fk
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "orders",
            key: "id",
          },
        },
        provider: {
          //결제 서비스 제공자 = card.provider
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        method: {
          //결제 수단 = method
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        total: {
          //총 결제 금액 = totalAmount
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: true,
        },
        paymentKey: {
          // 주문 고유값 = paymentKey
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        paymentType: {
          type: Sequelize.STRING(20),
          allowNull: true,
        },
        status: {
          //결제 상태 확인 = status
          type: Sequelize.STRING(10),
          allowNull: true,
        },
        createdAt: {
          // 결제 승인 일시 = data.approvedAt
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
