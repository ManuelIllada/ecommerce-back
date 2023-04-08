const { Admin } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const { email, password } = req.body;

  const admin = await Admin.findOne({
    where: { email: req.body.email },
  });
  if (admin) {
    const match = admin.password === password;
    //const checkPassword = await bcrypt.compare(password, hash);

    if (match) {
      const token = jwt.sign({ id: admin.id }, `${process.env.SESSION_SECRET}`);
      res.status(200).json({
        token: token,
        avatar: admin.avatar,
        email: admin.email,
        password: admin.password,
      });
    }
  } else {
    return res.status(404).json({ error: "Invalid credentials" });
  }
}
// Display a listing of the resource.
async function index(req, res) {
  const admin = await Admin.findAll();
  res.json(admin);
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}
// Otros handlers...
// ...

module.exports = {
  login,
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
