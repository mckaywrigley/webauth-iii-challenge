const express = require("express");
require("dotenv").config();

const app = express();

const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes);

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}.`);
});
