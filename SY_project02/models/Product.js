const Sequelize = require("sequelize");

module.exports = class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        pId: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        quantity: {
          type: Sequelize.INTEGER(10),
          allowNull: true,
          defaultValue: 1000,
        },
        category: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Product",
        tableName: "products",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Product.hasMany(db.OrderItem, { foreignKey: "productId" });
    db.Product.hasMany(db.CartItem, { foreignKey: "productId" });
    db.Product.belongsToMany(db.User, {
      through: "bookmark",
    });
  }
};
