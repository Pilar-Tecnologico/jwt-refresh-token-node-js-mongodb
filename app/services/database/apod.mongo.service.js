const apod = require('../../config/Schema/apod.schema');

async function saveApod(data){
    //const apodToday = new apod({title: 'my apod'});
    const apodToday = new apod(data);
    console.log(apodToday);
    try{
        await apodToday.save((err, apodToday) => {
            console.log('new element added to the DB', apodToday);
        });
    } catch(err){
        throw err;
    }

    return {status: 'ok'};
};

module.exports = {saveApod};