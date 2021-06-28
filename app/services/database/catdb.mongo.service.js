const vote = require('../../config/catSchema');

async function saveVote(data){
    const cat = new vote({
        id : data.id
     
    });
    try{
        await cat.save((err, cat) => {
            console.log('new element added to the DB', cat);
        });
    } catch(err){
        throw err;
    }

    return {status: 'ok'};
};

module.exports = {saveVote};