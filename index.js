const express = require("express");
const cors = require("cors");
require("dotenv").config();
const usersRoutes = require("./routes/v1/users.route.js");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/user", usersRoutes);

app.all("*", (req, res) => {
  res.send({ error: "No route found" });
});
app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
