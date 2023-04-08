const { Article } = require("../models");

async function login(req, res) {
  console.log("login...");
  /* 
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
  } */
}

// Otros handlers...
// ...

module.exports = {
  login,
};
