const express = require("express");
const router = express.Router();
const usersControllers = require("../../controllers/users.controller");

router
  /**
   * @api
   *
   */
  .get("/", (req, res) => {
    res.send({ Users: "Users data is found" });
  })
  .get("/all", usersControllers.getAllUsers);

module.exports = router;
