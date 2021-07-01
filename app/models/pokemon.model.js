const mongoose = require('mongoose');

//schema - save your favorite character with img
const Pokemon = mongoose.model(
    "Pokemon",
    new mongoose.Schema({
        id_pokemon: Number, 
        name: String
    })
);

module.exports = Pokemon;
