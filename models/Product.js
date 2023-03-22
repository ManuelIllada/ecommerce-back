const { Model, DataTypes } = require("sequelize");

// const slugify = require("slugify");

// slugify(toString(this.name), {
//   replacement: "-",
//   remove: undefined,
//   lower: true,
//   strict: false,
// })

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

    return Product;
  }
}

module.exports = Product;