const { Model, DataTypes } = require("sequelize");
const slugify = require("slugify");

class Category extends Model {
  static initModel(sequelize) {
    Category.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        slug: {
          type: DataTypes.STRING,
        },
        media: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "category",
      },
    );
    Category.beforeBulkCreate((categories) => {
      for (const category of categories) {
        category.slug = slugify(category.name, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
        });
      }
    });
    return Category;
  }
}

module.exports = Category;
