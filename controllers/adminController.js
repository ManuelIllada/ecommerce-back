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

// Otros handlers...
// ...

module.exports = {
  login,
};
