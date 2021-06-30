const axios = require('axios').default;
const bearerToken = process.env.BEARER_TOKEN_TWITTER;
const querystring = require('querystring');

async function getTweets(req, res){
    try {
        const token = `Bearer ${bearerToken}`;
        const options = {
            headers: {
                "Content-type": "application/json",
                Authorization: token,
            }
        };
        const params = querystring.stringify({query: "from:msalnacion"})
        const {data} = await axios.get(`https://api.twitter.com/2/tweets/search/recent?${params}`, options)
        res.status(200).json(data)
    }
    catch {
        const badResponse = {
            "code": "internal_server_error",
            "message": "Something went wrong"
        }
        res.status(500).json(badResponse)
    }
};

module.exports = {getTweets};