const { User } = require("../models");
const formidable = require("formidable");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {
  const users = await User.findAll();
  res.json(users);
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  console.log("store..");
  try {
    const form = formidable({
      multiples: false,
      uploadDir: __dirname + "/../public/img",
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      console.log("fields: ", fields);
      console.log("files: ", files);
      const { firstname, lastname, email, username, phone, address, password } = fields;

      const user = await User.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: password,
        phone: phone,
        address: address,
        avatar: files.avatar.newFilename,
      });

      await user.save();

      return res.status(200).json({ message: "Usuario creado con Exito🚀 " });
    });
  } catch {
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
      const { firstname, lastname, email, address, password, phone } = fields;

      await User.update(
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          address: address,
          password: password,
          phone: phone,
          avatar: files.avatar.newFilename,
        },
        { where: { id: id } },
      );

      return res.status(200).json({ message: "Usuario editado con Exito🚀 " });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const { id } = req.params;
  const result = await User.destroy({ where: { id: id } });
  if (result) {
    res.status(201).json({
      message: "Borrado exitosamente 🚀",
    });
  } else {
    res.status(400).json({ error: "Error al momento de Eliminar 😢" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: { email: req.body.email },
  });
  if (user) {
    const hash = user.password;
    const checkPassword = await bcrypt.compare(password, hash);

    if (checkPassword) {
      const token = jwt.sign({ id: user.id }, `${process.env.SESSION_SECRET}`);
      res.status(200).json({
        token: token,
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        address: user.address,
        phone: user.phone,
        avatar: user.avatar,
      });
      console.log("logeado..");
    }
  } else {
    console.log("Invalid credentials..");
    return res.status(404).json({ error: "Invalid credentials" });
  }
  res.end();
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
  login,
};
