/**
 * Este archivo se encarga de importar todos los seeders que se hayan definido
 * en el sistema y ejectuarlos.
 *
 * Para ejecutar este archivo se debe correr el comando:
 *
 * 👉 node seeders/runAllSeeders.js
 *
 *
 * Como alternativa, en el artchivo package.json se creó un comando "alias"
 * para que la ejecución sea un poco más corta:
 *
 * 👉 npm run seeders
 *
 */

require("dotenv").config();
const { sequelize } = require("../models/index");

async function runAllSeeders() {
  await sequelize.sync({ force: true });
  await require("./statusSeeder")();
  await require("./categorySeeder")();
  await require("./productSeeder")();
  await require("./userSeeder")();
  await require("./adminSeeder")();

  /**
   * Aquí se pueden ejectuar otros seeders que hayan en el sistema.
   * Por ejemplo, si se tuviesen seeders para los usuarios y para los
   * comentarios, habría que ejectuar:
   *
   * await require("./userSeeder")();
   * await require("./commentSeeder")();
   */

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

runAllSeeders();
