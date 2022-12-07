const Sequelize = require("sequelize");

module.exports = class Payment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        submitCode: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        amount: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: true,
        },
        paymentId: {
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
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Payment",
        tableName: "payments",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Payment.belongsTo(db.Order);
    db.Payment.belongsToMany(db.Order, {
      through: "checkouts",
    });
  }
};
