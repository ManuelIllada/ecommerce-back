const { Model } = require("sequelize");
const { Category } = require("../models");
const { Product } = require("../models");

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
  const { name } = req.body;
  if (name === "") {
    res.status(500).send({ error: "No se puede crear una categoria vacia 😢" });
  } else {
    const category = await Category.create({ name: name });
    await category.save();
    res.status(200).send({ message: "Categoria creada correctamente..🚀" });
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
      result: "Borrado exitosamente",
    });
  } else {
    res.status(400).json({ error: "Invalid data" });
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
