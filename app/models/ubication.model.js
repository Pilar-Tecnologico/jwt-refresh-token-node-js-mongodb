const mongoose = require("mongoose");

const Ubication = mongoose.model(
  "Ubication",
  new mongoose.Schema({
    coordenadas: {
        lat: Number,
        lon: Number,
    },
    provincia: String,
    departamento: String,
    municipio: String
  })
);

module.exports = Ubication;