const mongoose = require("mongoose");

const City = mongoose.model(
  "city",
  new mongoose.Schema({
    centroide: {
      lat: String,
      lon: String,
    },
    nombre: String,
  })
);

module.exports = City;
