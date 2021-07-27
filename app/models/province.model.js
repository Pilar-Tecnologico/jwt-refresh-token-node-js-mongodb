const mongoose = require('mongoose'); 
const Schema = require('mongoose').Schema;

const provinceSchema = new Schema({
    id: String,
    nombre: String
})

module.exports = mongoose.model("newProvince", provinceSchema);