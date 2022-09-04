const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "../public/usersData.json");

const getUsersData = () => {
  const data = fs.readFileSync(file, "utf-8");
  const users = JSON.parse(data);
  return users;
};

module.exports = { getUsersData };
