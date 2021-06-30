const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const ApiSchema = new Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model("Users", ApiSchema);
