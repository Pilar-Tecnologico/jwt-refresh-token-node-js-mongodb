const axios = require('axios').default;
const querystring = require('querystring');
const apikey = process.env.API_KEY;

async function getManifest(req, res){
    //COMPLETE WITH YOUR CODE
    const roverName = req.params.roverName;
    const axiosParams = querystring.stringify({api_key: apikey})
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?${axiosParams}`)
        .then((response) => {
            //photo_manifest
            const data = response.data.photo_manifest;
            //photos
            const lastManifest = data.photos.pop();
            delete data.photos;

            data.last_manifest = lastManifest;

            res.status(200).json(data);  
        })
        .catch(err =>{
            res.status(400).json({
                code: "bad_request",
                message: "Bad request. Please check your parameters values"
            });
        })
};

async function getData(req,res){
    const axiosParams = querystring.stringify({api_key: apikey})
    axios.get(`https://api.nasa.gov/insight_weather/?${axiosParams}&feedtype=json&ver=1.0`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err =>{
            res.status(500).json({
                code: "internal_server_error",
                message: "Something went wrong"
            });
        })
}

module.exports = {getManifest, getData};
