const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const authRoutes = require("./routes/auth");

app.use("/api", authRoutes);

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}.`);
});
