const express = require("express");
const router = express.Router();
const usersControllers = require("../../controllers/users.controller");

router
  /**
   * @api
   *
   */
  .get("/", (req, res) => {
    res.send("Server is running, you can get users data");
  })
  .get("/all", usersControllers.getAllUsers)

  .get("/random", usersControllers.getRandomUser)

  .post("/save", usersControllers.saveUser)

  .patch("/update", usersControllers.updateUser)

  .patch("/bulk-update", usersControllers.updateBulkUsers)

  .delete("/delete", usersControllers.deleteUser);

module.exports = router;
