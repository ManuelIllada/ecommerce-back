const formidable = require("formidable");
const { Product, Category } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const products = await Product.findAll();

  res.json(products);
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const form = formidable({
      multiples: true,
      uploadDir: __dirname + "/../public/img",
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      const { name, description, price, stock, featured, category } = fields;
      if (name === "")
        return res.status(500).json({ error: "No se puede crear una producto vacia 😢" });

      const product = await Product.create({
        name: name,
        description: description,
        price: price,
        stock: stock,
        featured: featured,
        categoryId: category,
        media: files.media.map((file) => file.newFilename),
      });

      await product.save();

      return res.status(200).json({ message: "Producto creado con Exito🚀 " });
    });
  } catch (err) {
    res.status(500).json({ error: err });
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
