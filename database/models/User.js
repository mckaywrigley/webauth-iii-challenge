const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("users").select("id", "username", "password", "department");
}

function findBy(filter) {
  return db("users").where(filter);
}

function add(user) {
  return db("users").insert(user);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
