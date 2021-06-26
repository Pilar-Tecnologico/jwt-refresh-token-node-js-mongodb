const mongoose = require("mongoose");

const Current = mongoose.model(
  "current",
  new mongoose.Schema({
    name: String,
    main: {
        temp: String,
       feels_like: String,
       temp_min: String,
       temp_max: String,
       pressure: String,
       humidity: String,
       sea_level: String,
       grnd_level: String,
       
    } 
  })
);

module.exports = Current;