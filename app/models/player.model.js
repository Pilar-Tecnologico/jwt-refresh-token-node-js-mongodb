const mongoose = require("mongoose");

const Player = mongoose.model(
    "Player",
    new mongoose.Schema({

        player_key: {
            type: String
        },
        team_key: {
            type: String
        },
        team_name: {
            type: String
        },
        player_name: {
            type: String
        },
        player_number: {
            type: String
        },
        player_type: {
            type: String
        },
        player_age: {
            type: String
        }
    })
);


module.exports = Player;