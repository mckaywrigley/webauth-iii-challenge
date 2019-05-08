const express = require("express");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

const router = express.Router();

router.post("/register", (req, res) => {});

router.post("/login", (req, res) => {});

router.get("/users", (req, res) => {});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
