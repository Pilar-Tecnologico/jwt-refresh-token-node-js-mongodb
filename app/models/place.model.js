const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
  temp: Number,
  feels_like: Number,
  temp_min: Number,
  temp_max: Number,
  pressure: Number,
  humidity: Number,
  sea_level: Number,
  grnd_level: Number,
  name: String,
});

module.exports = mongoose.model("Place", PlaceSchema);
