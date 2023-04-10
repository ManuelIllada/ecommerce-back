const formidable = require("formidable");
const { Order } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}
const orders = Order.findAll;
return res.json(orders);
// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const { user, products } = req.body;
  console.log(user);
  try {
    const order = await Order.create({
      products: products.map((product) => product.id),
      statusId: 1,
      userId: user.id,
    });

    await order.save();

    return res.status(200).json({ message: "Orden creado con Exito🚀 " });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  const { id } = req.params;
  try {
    const form = formidable({
      multiples: true,
      uploadDir: __dirname + "/../public/img",
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      const { name, description, price, stock, featured, category } = fields;

      const product = await Product.update(
        {
          name: name,
          description: description,
          price: price,
          stock: stock,
          featured: featured,
          categoryId: category,
          media: files.media.map((file) => file.newFilename),
        },
        { where: { id: id } },
      );

      return res.status(200).json({ message: "Producto editado con Exito🚀 " });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const { id } = req.params;
  const result = await Product.destroy({ where: { id: id } });
  if (result) {
    res.status(201).json({
      message: "Borrado exitosamente 🚀",
    });
  } else {
    res.status(400).json({ error: "Error al momento de Eliminar 😢" });
  }
}

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