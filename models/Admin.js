const { Model, DataTypes } = require("sequelize");

class Admin extends Model {
  static initModel(sequelize) {
    Admin.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        avatar: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
        token: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "admin",
      },
    );
    return Admin;
  }
}

module.exports = Admin;
