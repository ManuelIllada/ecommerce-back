/**
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 * En este ejemplo se están insertando 3000 artículos con textos ficticios.
 *
 * A priori, esta función debería ser ejecutada una única vez, al correr el
 * proyecto. Esto está hecho el archivo dbInitialSetup.js. Para evitar que se
 * corran los seeders se podría borrar o comentar dicha línea. Como alternativa
 * se podría escribir un código que permita ejectuar los seeders desde la
 * terminal.
 *
 */

const { Product } = require("../models");

module.exports = async () => {
  const product = [
    {
      name: "Segway Ninebot MAX G30 Electric Kick Scooter",
      description: "Ad Lorem Ipsum",
      media:
        "https://cdn11.bigcommerce.com/s-r5k51kqrix/images/stencil/608x608/products/974/2290/ninebot%20g30%20max%20images%20%280%29__21755.1635992129.jpg?c=1",
      price: "1,199.00",
      stock: 10,
      category: 1,
      featured: true,
      slug: "",
    },
    {
      name: "Smartkick N4 500W Motor Electric Scooter",
      description: "Ad Lorem Ipsum",
      media:
        "https://cdn11.bigcommerce.com/s-r5k51kqrix/images/stencil/608x608/products/1561/4873/Smartkick_N4_Electric_Scooter__26568.1656989824.jpg?c=1",
      price: "1,199.00",
      stock: 50,
      category: 1,
      featured: true,
      slug: "",
    },
    {
      name: "Smartkick Z2 Rear Wheel Drive Electric Bicycle",
      description: "Ad Lorem Ipsum",
      media:
        "https://cdn11.bigcommerce.com/s-r5k51kqrix/images/stencil/608x608/products/1480/4973/SMARTKICK_Z2_E-BIKE_X_SERIES_4__37747.1661830803.jpg?c=1",
      price: "2,799.00",
      stock: 20,
      category: 2,
      featured: true,
      slug: "",
    },
    {
      name: "Onewheel Pint - Sand",
      description: "Ad Lorem Ipsum",
      media:
        "https://cdn11.bigcommerce.com/s-r5k51kqrix/images/stencil/608x608/products/923/2057/OneWheel%20Pint%20Sand%20%282%29__60903.1619348557.jpg?c=1",
      price: "1,500.00",
      stock: 5,
      category: 3,
      featured: true,
      slug: "",
    },
    {
      name: "Onewheel Pint X - Powder Blue",
      description: "Ad Lorem Ipsum",
      media:
        "https://cdn11.bigcommerce.com/s-r5k51kqrix/images/stencil/608x608/products/1396/3797/OneWheel_Pint_X_Product_Photo_WR__51638.1635438718.jpg?c=1",
      price: "1,900.00",
      stock: 3,
      category: 3,
      featured: true,
      slug: "",
    },
    {
      name: "Inmotion V11 2200W Electric U",
      description: "Ad Lorem Ipsum",
      media:
        "https://cdn11.bigcommerce.com/s-r5k51kqrix/images/stencil/608x608/products/1021/2488/Inmotion%20V11%20Webres%20%283%29__16500.1617349152.jpg?c=1",
      price: "2,699.00",
      stock: 3,
      category: 4,
      featured: true,
      slug: "",
    },
  ];

  await Product.bulkCreate(product);
  console.log("[Database] Se corrió el seeder de Product.");
};
