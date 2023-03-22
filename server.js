require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const APP_PORT = process.env.APP_PORT || 8000;
const app = express();
app.use(cors());
// Falta agregar midware de JSON
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
