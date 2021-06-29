const querystring = require('querystring');
const apiKey = process.env.API_KEY;
//hash key (password md5) = 1 + apikey private + apikey public
const apiHash = process.env.HASH_KEY;
const hashs = querystring.stringify({hash: apiHash}); 
const params = querystring.stringify({apikey: apiKey});

module.exports = {

    hashs, params
    
}