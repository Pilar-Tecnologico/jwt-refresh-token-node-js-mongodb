const mongoose = require('mongoose');
const currentSchema = require('../../config/schema/current.schema');

async function saveCurrent(){
    const currentModel = mongoose.model('current', currentSchema);
    const watherCurrent = new Current({data});
    await watherCurrent.save((err, watherCurrent) => {
        if (err) return console.log(err);
        console.log('new elemend add', watherCurrent);
        return {status: 'ok'};
    })  
};

module.exports = {saveCurrent};