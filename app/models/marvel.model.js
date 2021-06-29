const mongoose = require("mongoose");

const Character = mongoose.model(
  "Character",
  new mongoose.Schema({
    id: String,
    name: String,
    description: String,
  })
);

module.exports = Character;