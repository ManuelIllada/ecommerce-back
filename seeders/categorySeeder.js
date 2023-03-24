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
        "https://imechewebresources.blob.core.windows.net/imeche-web-content/images/default-source/pe-news/off-road.jpg?sfvrsn=76bd9e12_0",
    },
    {
      name: "Boards",
      media:
        "https://images.unsplash.com/photo-1624736712294-7b714a6c9ab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
    },
    {
      name: "Scooters",
      media:
        "https://www.bbva.com/wp-content/uploads/2021/06/BBVA-patinete-electrico-movilidad-sostenibilidad-transporte.jpg",
    },
    {
      name: "Bikes",
      media:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/09/mujer-montada-bicicleta-electrica-mirando-mar-2467819.jpgs",
    },
    {
      name: "Accessories",
      media:
        "https://ttbiketriatlon.com/wp-content/uploads/2020/06/10-accesorios-imprescindibles-para-bicicletas-de-triatl%C3%B3n-1.jpg",
    },
  ];

  await Category.bulkCreate(category);
  console.log("[Database] Se corrió el seeder de Category.");
};
