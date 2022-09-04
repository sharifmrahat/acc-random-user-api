const usersData = require("../utils/usersDB");

module.exports.getAllUsers = async (req, res) => {
  const users = await usersData.getUsersData();
  res.send(users);
};
