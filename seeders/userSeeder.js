const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "en";

module.exports = async () => {
  const users = [];
  for (let i = 0; i < 10; i++) {
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    users.push({
      firstname,
      lastname,
      email: faker.internet.exampleEmail(firstname, lastname),
      address: "Calle falsa 1234",
      password: await bcrypt.hash("1234", 8),
      phone: faker.phone.phoneNumber("+598 9 ### ###"),
      avatar: faker.image.avatar(),
    });
  }
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de User.");
};
