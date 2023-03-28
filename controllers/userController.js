const { User } = require("../models");
const formidable = require("formidable");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/public/img",
    keepExtensions: true,
  });
  console.log(req.body);
  form.parse(req, async (err, fields, files) => {
    console.log("entra");
    const passwordParaHashear = fields.password;
    const passwordHasheado = await bcrypt.hash(passwordParaHashear, 10);
    const { firstname, lastname, email, address, phone } = fields;
    const user = await User.create({
      firstname,
      lastname,
      email,
      address,
      password: passwordHasheado,
      phone,
      avatar: files.avatar.newFilename,
    });
    return res.json(user);
  });
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

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
      res.send({
        token: token,
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        address: user.address,
        phone: user.phone,
        avatar: user.avatar,
      });
    }
  } else {
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
