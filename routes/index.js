/**
 * No hay una única forma de organizar las rutas de un sitio web.
 * Una alternativa podría ser organizar las rutas por entidad:
 */

const statusRoutes = require("./statusRoutes");
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const adminRoutes = require("./adminRoutes");
const orderRoutes = require("./orderRoutes");

/**
 * Otra alternativa podría ser organizar las rutas según su nivel de
 * privacidad (ej: si son rutas públicas o privadas).
 *
 * En `publicRoutes` podrían estar las rutas relacionadas con páginas como
 * Home, Contacto y Sobre Nosotros. En `privateRoutes` podrían estar las rutas
 * relacionados al Panel de Control (Admin). Notar que si se está construyento
 * una API esta alternativa no tendría sentido.
 */

module.exports = (app) => {
  /**
   * Notar que si el sitio está en español, tiene sentido que las URLs que se
   * ven en la barra de direcciiones del navegador también lo estén. No así los
   * nombres de variables, funciones, etc, que siempre se recomienda que estén
   * en inglés.
   */

  app.use("/status", statusRoutes);
  app.use("/users", userRoutes);
  app.use("/products", productRoutes);
  app.use("/categories", categoryRoutes);
  app.use("/panel", adminRoutes);
  app.use("/orders", orderRoutes);
};
