const formidable = require("formidable");
const { Order, Product, Status, User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const orders = await Order.findAll({ include: [Status, User] });
  res.json(orders);
}

// Display the specified resource.
async function show(req, res) {
  const orders = await Order.findAll({
    where: {
      userId: req.params.id,
    },
    include: [Status],
  });

  res.json(orders);
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const { user, products } = req.body;

  try {
    await Order.create({
      products: products.map((product) => ({
        name: product.name,
        idProduct: product.id,
        quantity: product.quantity,
        price: product.price,
      })),
      statusId: 1,
      userId: user.id,
    });

    for (const item of products) {
      const product = await Product.findByPk(item.id);
      product.stock = product.stock - item.quantity;
      await product.save();
    }

    return res.status(200).json({ message: "Orden creado con Exito🚀 " });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const { newStatus, orderId } = req.body;
    const order = await Order.findByPk(orderId);
    order.update({
      statusId: newStatus,
    });
    order.save();

    return res.status(200).json({ message: "Orden Modificada con Exito🚀 " });
  } catch (error) {
    res.status(400).json({ error: "Error al momento de Eliminar 😢" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
