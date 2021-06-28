const axios = require('axios').default;
const bearerToken = process.env.BEARER_TOKEN_TWITTER;

async function getTweets(req, res){
    try {
        const token =  `Bearer ${bearerToken}`;
        const options = {
            headers: {
                "Content-type": "application/json",
                Authorization: token,
            }
        };

        const {data} = await axios.get(`https://api.twitter.com/2/tweets/search/recent?query=from:msalnacion`, options)

        res.status(200).json(data)
    }
    catch {
        const badResponse = {
            "code": "bad_request",
            "message": "Bad request. Please check your parameters values"
        }
        res.status(400).json(badResponse)
    }
};

module.exports = {getTweets};