const express = require("express");

const app = express();

const port = 4000;

const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running on port: ${port}.`);
});
