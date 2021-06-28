  
const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const covidWorldSchema = new Schema({
    NewConfirmed: Number,
    TotalConfirmed: Number,
    NewDeaths: Number,
    TotalDeaths: Number,
    NewRecovered: Number,
    TotalRecovered: Number,
    Date: String,
    creation_date: { type: Date, default: Date.now },
    // last_modified_date: { type: Date, default: Date.now, expires: 60}
});

module.exports = mongoose.model('covidWorld', covidWorldSchema);