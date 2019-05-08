const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const authRoutes = require("./routes/auth");

app.use("/api", authRoutes);

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}.`);
});
