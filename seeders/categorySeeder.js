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

const { Category } = require("../models");

module.exports = async () => {
  const category = [
    {
      name: "Unicycles",
      media:
        "https://vrooominpevdatabase.b-cdn.net/promo-banners/2022/november/inmotion-v13-rider-road.jpg",
      cardImage:
        "https://cdn.discordapp.com/attachments/992571782294929533/1088903275916570624/categorywheels.jpg",
    },
    {
      name: "Boards",
      media:
        "https://images.unsplash.com/photo-1624736712294-7b714a6c9ab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
      cardImage:
        "https://cdn.discordapp.com/attachments/992571782294929533/1088899921077350541/categoryskate.jpg",
    },
    {
      name: "Scooters",
      media:
        "https://www.bbva.com/wp-content/uploads/2021/06/BBVA-patinete-electrico-movilidad-sostenibilidad-transporte.jpg",
      cardImage:
        "https://cdn.discordapp.com/attachments/992571782294929533/1088896448042651698/7d1bdf155036743.png",
    },
    {
      name: "Bikes",
      media:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/09/mujer-montada-bicicleta-electrica-mirando-mar-2467819.jpg",
      cardImage:
        "https://cdn.discordapp.com/attachments/992571782294929533/1088903275673293000/categorybike.jpg",
    },
    {
      name: "Accessories",
      media:
        "https://media.discordapp.net/attachments/992571782294929533/1096466014377619567/photo-1626275850959-2f19cd600b0f.png?width=1059&height=702",
      cardImage:
        "https://cdn.discordapp.com/attachments/992571782294929533/1088901648262381698/accesorios.jpg",
    },
  ];

  await Category.bulkCreate(category);
  console.log("[Database] Se corrió el seeder de Category.");
};
