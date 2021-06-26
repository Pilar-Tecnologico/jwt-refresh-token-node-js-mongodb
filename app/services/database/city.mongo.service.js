const mongoose = require('mongoose');
const citySchema = require('../../config/schema/city.schema');

async function saveCity(){
    const cityModel = mongoose.model('city', citySchema);
    const newCity = new Current({cityName: 'ciudad'});
    newCity.save((err, newCity) => {
        if (err) return console.log(err);
        console.log('new elemend add', newCity);
        return {status: 'ok'};
    })  
};

module.exports = {saveCity};