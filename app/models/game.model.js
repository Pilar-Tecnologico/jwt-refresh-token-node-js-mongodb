const mongoose = require("mongoose");

const Game = mongoose.model(
  "Game",
  new mongoose.Schema({
    title: String,
    platform: String,
    game_url: String,
    genre: String,
    description: String
  })
);

module.exports = Game;