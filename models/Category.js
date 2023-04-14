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
        cardImage: {
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
    }),
      Category.beforeCreate((instance, options) => {
        instance.slug = slugify(instance.name);
      });

    return Category;
    function slugify(text) {
      return text.toString().toLowerCase().trim().substring(0, 50); // Limita el slug a 50 caracteres
    }
  }
}

module.exports = Category;
