const { Model, DataTypes } = require("sequelize");
const slugify = require("slugify");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.STRING(1000),
        },
        media: {
          type: DataTypes.JSON,
          defaultValue: [],
        },
        price: {
          type: DataTypes.DECIMAL,
        },
        stock: {
          type: DataTypes.INTEGER,
        },
        featured: {
          type: DataTypes.BOOLEAN,
        },
        slug: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "product",
      },
    );

    Product.beforeBulkCreate((products) => {
      for (const product of products) {
        product.slug = slugify(product.name, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
        });
      }
    }),
      Product.beforeCreate((instance, options) => {
        instance.slug = slugify(instance.name);
      });

    return Product;
    function slugify(text) {
      return text.toString().toLowerCase().trim().substring(0, 50); // Limita el slug a 50 caracteres
    }
  }
}

module.exports = Product;
