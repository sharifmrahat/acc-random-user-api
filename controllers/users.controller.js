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
      message: "Please provide all properties of a user",
      field: "name, gender, contact, address, photoURL",
    });
  }
};

module.exports.updateUser = async (req, res) => {
  const { _id } = req.body;
  if (!_id) {
    return res.send({ message: "User Id is no found!" });
  }
  const users = await usersData.getUsersData();

  const selectedUser = users.findIndex(
    (user) => user._id.toString() === _id.toString()
  );

  const user = { ...users[selectedUser], ...req.body };
  users[selectedUser] = user;
  const status = await usersData.updateUser(users);
  res.send(status);
};
