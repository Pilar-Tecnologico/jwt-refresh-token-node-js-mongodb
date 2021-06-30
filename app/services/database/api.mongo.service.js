const apiCats = require('../../models/api.cats.model');
const apiNasa = require('../../models/api.nasa.model');

async function saveNasa(data) {
    const postNasa = new apiNasa({
        date: data.date,
        explanation: data.explanation,
        media_type: data.media_type,
        service_version: data.service_version,
        title: data.title,
        url: data.url
    });
    try {
        await postNasa.save((err, element) => {
            console.log('New element added to the DB', element);
        });
    } catch (err) {
        throw err;
    }

    return { status: 'Is save correctly register in DB',data };
};

async function saveCats(data) {
    
    const postCats = new apiCats({
        id: data.id,
        name: data.name,
        origin: data.origin,
        description: data.description
        });
    try {
        await postCats.save((err, element) => {
            console.log('New element added to the DB', element);
        });
    } catch (err) {
        throw err;
    }

    return { status: 'Correctly registered in DB', data};
};

module.exports = { saveNasa, saveCats };