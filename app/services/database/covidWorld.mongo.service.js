const covidw = require('../../models/covidWorld.model');

async function saveCovidWorldCache(data){
    console.log(data, 'here');
    const covidWorldDay = new covidw(data);
    console.log(covidWorldDay);
    try{
        await covidWorldDay.save((err, covidWorldDay) => {
            console.log('new element added to the DB', covidWorldDay);
        });
    } catch(err){
        throw err;
    }

    return {};
};

module.exports = {saveCovidWorldCache};