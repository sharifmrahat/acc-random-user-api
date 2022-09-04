const usersData = require("../utils/usersDB");

module.exports.getAllUsers = async (req, res) => {
  const users = await usersData.getUsersData();
  const limit = req.query.limit;
  if (limit) {
    return res.send(users.slice(0, limit));
  }
  res.send(users);
};

module.exports.getRandomUser = async (req, res) => {
  const users = await usersData.getUsersData();
  const randomIndex = Math.floor(Math.random() * users.length);
  const randomUser = users[randomIndex];
  res.send(randomUser);
};
