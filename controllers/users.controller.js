const usersData = require("../utils/usersDB");

module.exports.getAllUsers = async (req, res) => {
  const limit = req.query.limit;

  const users = await usersData.getUsersData();
  if (limit) {
    return res.send(users.slice(0, limit));
  }
  res.send(users);
};
