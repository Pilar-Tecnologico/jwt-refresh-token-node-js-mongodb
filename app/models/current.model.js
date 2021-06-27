const mongoose = require("mongoose");

const Current = mongoose.model(
  "current",
  new mongoose.Schema({
    name: String,
    main: {
        temp: Number,
        feels_like: Number,
        temp_min: Number,
        temp_max: Number,
        pressure: Number,
        humidity: Number,
        sea_level: Number,
        grnd_level: Number,
       
    } 
  })
);

module.exports = Current;