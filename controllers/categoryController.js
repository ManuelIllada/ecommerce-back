const { Category } = require("../models");
const { Product } = require("../models");
const formidable = require("formidable");

// Display a listing of the resource.
async function index(req, res) {
  const categories = await Category.findAll();
  res.json(categories);
}

// Display the specified resource.
async function show(req, res) {
  const id = req.params.id;
  const products = await Product.findAll({ include: Category, where: { categoryId: id } });
  res.json(products);
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const form = formidable({
      multiples: false,
      uploadDir: __dirname + "/../public/img",
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      const { name } = fields;
      if (name === "")
        return res.status(500).json({ error: "No se puede crear una categoria vacia 😢" });

      const category = await Category.create({
        name: name,
        media: files.media.newFilename,
        cardImage: files.cardImage.newFilename,
      });

      await category.save();

      return res.status(200).json({ messagers: "Categoria creada con Exito🚀 " });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  const { id, name } = req.body;

  const category = await Category.findByPk(id);

  if (!category) throw new Error("No record found");

  const result = await category.update({ name: name });

  if (result) {
    res.status(201).json({
      result,
    });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const result = await Category.destroy({ where: { id: req.params.id } });
  if (result) {
    res.status(201).json({
      message: "Borrado exitosamente",
    });
  } else {
    res.status(400).json({ error: "Error al momento de Eliminar" });
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
