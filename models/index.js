const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    /* dialectModule: require("pg"), */
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const Admin = require("./Admin");
const Category = require("./Category");
const Order = require("./Order");
const Product = require("./Product");
const Status = require("./Status");
const User = require("./User");

User.initModel(sequelize);
Admin.initModel(sequelize);
Category.initModel(sequelize);
Order.initModel(sequelize);
Product.initModel(sequelize);
Status.initModel(sequelize);

/**
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 */

Status.hasMany(Order);
Order.belongsTo(Status);

User.hasMany(Order);
Order.belongsTo(User);

Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = {
  sequelize,
  Admin,
  Category,
  Order,
  Product,
  Status,
  User,
};
