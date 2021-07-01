const apod = require('../../config/Schema/apod.schema');

async function saveApod(data){
    console.log('data', data);
    const apodToday = new apod({
        date: data.date,
        explanation: data.explanation,
        media_type: data.media_type,
        service_version: data.service_version,
        title: data.title,
        url: data.url
    });
    try{
        await apodToday.save((err, apodToday) => {
            console.log('New element added to DB', apodToday);
        });
    } catch(err){
        throw err;
    }
    return {status: 'Data saved'};
};

module.exports = {saveApod};