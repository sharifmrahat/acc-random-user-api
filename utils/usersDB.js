const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "../public/usersData.json");

const getUsersData = () => {
  const data = fs.readFileSync(file, "utf-8");
  const users = JSON.parse(data);
  return users;
};

const saveNewUser = async (newUser) => {
  try {
    const users = await getUsersData();
    const _id = users.length + 1;
    users.push({ ...newUser, _id });
    fs.writeFileSync(file, JSON.stringify(users));
    return { success: true, data: { ...newUser, _id } };
  } catch (err) {
    return { success: false };
  }
};

const updateUser = async (updatedData) => {
  try {
    fs.writeFileSync(file, JSON.stringify(updatedData));
    return { success: true, message: "Successfully updated" };
  } catch (err) {
    return { success: false, message: "Update failed" };
  }
};

module.exports = { getUsersData, saveNewUser, updateUser };
