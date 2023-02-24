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
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        updatedAt: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "Bookmark",
        tableName: "bookmarks",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Bookmark.belongsTo(db.User, {
      foreignKey: "userId",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    db.Bookmark.belongsTo(db.Product, {
      foreignKey: "productId",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  }
};
