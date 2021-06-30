const apiNasa = require('../../app/config/apod.schema');
const apiLibra = require('../../app/config/libra.schema');

async function saveNasa(data){
    const postSend = new apiNasa({ 
        date: data.date,
        explanation: data.explanation,
        media_type: data.media_type,
        service_version: data.service_version,
        title: data.title,
        url: data.url
    });
    try{
        await postSend.save((err, element) => {
            console.log('New element added to the DB', element);
        });
    } catch(err){
        throw err;
    }

    return {status: 'Save correctly register in DB' };
};



async function saveLibra(data) {
    
    const postLibra = new apiLibra({
       ID: data.ID,
       title: data.title,
       author: data.author,
       //content_short: data.content_short
       //publisher: String
       

        });
    try {
        await postLibra.save((err, element) => {
            console.log('New element added to the DB', element);
        });
    } catch (err) {
        throw err;
    }

    return { status: 'Is save correctly register in DB', data};
};


module.exports = {saveNasa, saveLibra};
