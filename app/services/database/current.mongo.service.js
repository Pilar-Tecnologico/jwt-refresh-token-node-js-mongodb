const mongoose = require('mongoose');
const currentSchema = require('../../config/schema/current.schema');

async function saveCurrent(){
    const currentModel = mongoose.model('current', currentSchema);
    const currentToday = new Current({cityName: 'ciudad'});
    currentToday.save((err, currentToday) => {
        if (err) return console.log(err);
        console.log('new elemend add', currentToday);
        return {status: 'ok'};
    })  
};

module.exports = {saveCurrent};