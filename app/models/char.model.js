const mongoose = require('mongoose');

//schema - save your favorite character with img
const Char = mongoose.model(
    "Char",
    new mongoose.Schema({
        id_api: String, 
        name: String,
        path_img: String,
    })
);

module.exports = Char;

