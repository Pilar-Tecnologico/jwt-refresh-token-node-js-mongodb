const vote = require('../../config/cat.schema');

async function saveVote(data){
    const catVote = new vote({
        id: data.id,
        name: data.name
    });
    try{
        await catVote.save((err, elem) => {
            console.log('new element added to the DB', elem);
        });
    } catch(err){
        throw err;
    }

    return {status: 'ok', data};
};

module.exports = {saveVote};
