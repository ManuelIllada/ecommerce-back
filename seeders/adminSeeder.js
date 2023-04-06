const { Admin } = require("../models");

module.exports = async () => {
  const admin = [
    {
      email: "admin@admin.com",
      password: 1234,
    },
  ];

  await Admin.bulkCreate(admin);
  console.log("[Database] Se corrió el seeder de Admin.");
};
