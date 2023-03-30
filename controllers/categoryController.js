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
  console.log(name);
  try {
    const category = await Category.create({ name: name });
    await category.save();
  } catch (error) {
    res.status(500).send({ error: error });
  }
  res.status(200).send({ message: "Categoria creada correctamente.." });
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

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
