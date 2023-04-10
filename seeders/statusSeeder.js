const { Status } = require("../models");

module.exports = async () => {
  const statuses = [
    {
      name: "Processing",
    },
    {
      name: "Sent",
    },
    {
      name: "Delivered",
    },
  ];

  await Status.bulkCreate(statuses);
  console.log("[Database] Se corrió el seeder de Status.");
};
