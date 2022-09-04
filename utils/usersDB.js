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
    return {
      success: true,
      message: "Successfully saved",
      data: { ...newUser, _id },
    };
  } catch (err) {
    return { success: false, message: "Saving failed" };
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

const deleteOne = async (selectedId) => {
  try {
    const users = await getUsersData();
    const residualUsers = users.filter(
      (user) => user._id.toString() !== selectedId.toString()
    );
    if (users.length === residualUsers.length)
      return { message: "Users data is not found" };

    fs.writeFileSync(file, JSON.stringify(residualUsers));
    return { success: true, message: "Successfully deleted" };
  } catch (err) {
    return { success: false, message: "Delete failed" };
  }
};

module.exports = { getUsersData, saveNewUser, updateUser, deleteOne };
