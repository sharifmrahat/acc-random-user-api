const express = require("express");
const router = express.Router();

router
  /**
   * @api
   *
   */
  .get("/", (req, res) => {
    res.send({ Users: "Users data is found" });
  });

module.exports = router;
