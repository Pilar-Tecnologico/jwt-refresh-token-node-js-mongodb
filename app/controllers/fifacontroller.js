const axios = require('axios').default;

async function getfifa(req, res){
    //COMPLETE WITH YOUR CODE
/*     const player = req.params.player;
    console.log(player); */
    
    axios.get(`https://www.easports.com/fifa/ultimate-team/api/fut/item`)
    .then((response) => {
        const data= response.data.items

        
        res.json(data);
    })
        .catch(err => {
            res.status(400).json({
                
                "code": "bad_request",
                "message": "Bad request. Please check your parameters values"
            })
        })
};

module.exports = {getfifa};