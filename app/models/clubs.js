const mongoose = require("mongoose");

const Club = mongoose.model(
  "Club",
  new mongoose.Schema({
    id: String,
    name: String,
    league: String
    
  })
);

module.exports = Club;
