const mongoose = require("mongoose");

const School = mongoose.model(
  "School",
  new mongoose.Schema({
    director: String, 
    school: String,
    cue: String,
    enrollment_number: String,
    province: String,
    city: String,
    status_internet: String,
    internet_services: String,
    user: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
  })
);

module.exports = School;
