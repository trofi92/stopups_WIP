const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static findUser(email) {
    return this.findOne({
      where: {
        email,
      },
    });
  }

  static async getBookmarks(id) {
    // Find the user with the given id
    const user = await this.findOne({ where: { id } });

    // If the user was not found, return null
    if (!user) return null;

    // Otherwise, return the bookmarks associated with the user
    return user.getBookmarks();
  }

  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING(1000), //500
          allowNull: true,
          unique: true,
        },
        name: {
          type: Sequelize.STRING(1000), //100
          allowNull: true,
        },
        nickname: {
          type: Sequelize.STRING(1500), //15
          allowNull: false,
        },
        provider: {
          type: Sequelize.STRING(1000), //10
          allowNull: true,
          defaultValue: "local",
        },
        snsId: {
          type: Sequelize.STRING(3000), //30
          allowNull: true,
        },
        password: {
          type: Sequelize.STRING(1000), //500
          allowNull: true,
        },
        telephone: {
          type: Sequelize.STRING(1300), //13
          allowNull: true,
        },
      },

      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "User",
        tableName: "users",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasOne(db.Cart, { foreignKey: "userId" });
    db.User.hasMany(db.Order, { foreignKey: "userId" });
    db.User.belongsToMany(db.Product, {
      through: "bookmark",
    });
  }
};
