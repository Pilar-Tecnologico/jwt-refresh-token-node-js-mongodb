const covidSumary = require('../../models/covidWorld.model');

async function saveCovidWorldCache(data){
    const covidWorldSumary = new covidSumary(data);
    try{
        await covidWorldSumary.save((err, covidWorldSumary) => {
            console.log('new element added to the DB', covidWorldSumary);
        });
    } catch(err){
        throw err;
    }
    return {};
};

module.exports = {saveCovidWorldCache};