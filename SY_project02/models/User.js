const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

module.exports = class User extends Sequelize.Model {
  static generateJWT(user) {
    return jwt.sign({ id: user.email, name: user.name }, jwtSecret, {
      expiresIn: "1h",
    });
  }

  static findUser(email) {
    return this.findOne({
      where: {
        email: email,
      },
    });
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
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Order, {
      foreignKey: "userId",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    db.User.hasMany(db.Bookmark, {
      foreignKey: "userId",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  }
};
