const mongoose = require("mongoose");

const Log = mongoose.model(
  "Log",
  new mongoose.Schema({
    
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    route: String,
    params: String,
    status: Number,
  }, 
  { timestamps:true } 
  )
);

module.exports = Log;
