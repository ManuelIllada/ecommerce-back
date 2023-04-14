const formidable = require("formidable");
const { Product, Category } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const products = await Product.findAll();

  res.json(products);
}

// Display the specified resource.
async function show(req, res) {
  const products = await Product.findAll({
    where: {
      id: req.params.id,
    },
  });

  res.json(products);
}

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
      const { name, description, price, stock, category } = fields;
      if (name === "") return res.status(500).json({ error: "Cannot create an empty product 😢" });
      console.log("length: ", files.media.length);
      const product = await Product.create({
        name: name,
        description: description,
        price: price,
        stock: stock,
        categoryId: category,
        media: [files.media.newFilename],
        //files.media >= 2 ? files.media.map((file) => [...files, file.newFilename]): [files.media.newFilename],
      });

      await product.save();

      return res.status(200).json({ message: "Product created successfully🚀 " });
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

      await Product.update(
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

      return res.status(200).json({ message: "Successfully edited product🚀 " });
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
      message: "Deleted successfully 🚀",
    });
  } else {
    res.status(400).json({ error: "Error when deleting 😢" });
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
