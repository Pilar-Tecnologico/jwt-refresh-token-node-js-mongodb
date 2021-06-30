const vote = require('../../config/catSchema');

async function saveVote(data){
    const cat = new vote({
        id: data.id,
        name: data.name
     
    });
    try{
        await cat.save((err, element) => {
            console.log('new element added to the DB', element);
        });
    } catch(err){
        throw err;
    }

    return {status: 'ok', data};
};

module.exports = {saveVote};