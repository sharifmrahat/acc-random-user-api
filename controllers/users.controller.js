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

module.exports.saveUser = async (req, res) => {
  const user = req.body;
  if (
    user.gender &&
    user.name &&
    user.contact &&
    user.address &&
    user.photoUrl
  ) {
    const status = await usersData.saveNewUser(user);
    res.send(status);
  } else {
    res.send({
      message: "Please provide all valid information",
      field: "name, gender, contactm address amd photoURL",
    });
  }
};
