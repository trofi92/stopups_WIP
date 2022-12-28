const Sequelize = require("sequelize");

module.exports = class Bookmark extends Sequelize.Model {
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
        drinktype: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        eattype: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        cooktype: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Bookmark",
        tableName: "bookmarks",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Bookmark.belongsTo(db.User, { foreignKey: "userId" });
    db.Bookmark.belongsTo(db.Product, { foreignKey: "productId" });
  }
};
