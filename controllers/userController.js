const { User } = require("../models");
const formidable = require("formidable");
const bcrypt = require("bcryptjs");
const { faker } = require("@faker-js/faker");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  /* const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  }); */
  console.log(req.body);

  const user = {
    firstname: "manu",
    lastname: "illada",
    email: "hola@gmail.com",
    address: "1234",
    password: "1234" /* await bcrypt.hash("1234", 8) */,
    phone: "1234",
    avatar: faker.image.avatar() /* files.image.newFilename */,
  };

  await User.create(user);
  return res.json(user);
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
