const mongoose = require("mongoose");

const Character = mongoose.model(
  "Character",
  new mongoose.Schema({
    name: String,
    status: String,
    species: String,
    gender: String,
    origin: String,
  })
);

module.exports = Character;