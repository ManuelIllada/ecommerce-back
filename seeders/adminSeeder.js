const { Admin } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const admin = [
    {
      email: "admin@admin.com",
      password: await bcrypt.hash("1234", 8),
      avatar:
        "https://cdn.discordapp.com/attachments/1094096211172135065/1094343850413281300/6fcb55e9-ec44-4add-8c7a-3800944dab08.jpg",
    },
  ];

  await Admin.bulkCreate(admin);
  console.log("[Database] Se corrió el seeder de Admin.");
};
