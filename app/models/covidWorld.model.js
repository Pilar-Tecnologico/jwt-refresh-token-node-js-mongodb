  
const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const covidWorldSchema = new Schema({
    updated: Number,
    cases: Number,
    todayCases: Number,
    deaths: Number,
    todayDeaths: Number,
    recovered: Number,
    todayRecovered: Number,
    active: Number,
    critical: Number,
    casesPerOneMillion: Number,
    deathsPerOneMillion: Number,
    tests: Number,
    testsPerOneMillion: Number,
    population: Number,
    oneCasePerPeople: Number,
    oneDeathPerPeople: Number,
    oneTestPerPeople: Number,
    undefined: Number,
    activePerOneMillion: Number,
    recoveredPerOneMillion: Number,
    criticalPerOneMillion: Number,
    affectedCountries: Number,
    creation_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('covidWorldSumary', covidWorldSchema);