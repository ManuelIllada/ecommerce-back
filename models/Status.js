const { Model, DataTypes } = require("sequelize");

class Status extends Model {
  static initModel(sequelize) {
    Status.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "status",
      },
    );
    return Status;
  }
}

module.exports = Status;
