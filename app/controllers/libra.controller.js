const axios = require('axios').default;
const querystring = require('querystring');
const apodMongoService = require('../../services/database/apod.mongo.service')

async function getApiLibra(req, res){
    const query = {

    id: req.query.id
        
    };
    const axiosParams = querystring.stringify({ ...query});
    axios.get(`https://www.etnassoft.com/api/v1/get/?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

async function getApiLibraAuthor(req, res){
    const query = {
        id: req.query.id,
        title: req.query.book_title,
        book_author: req.query.book_author,
        publisher: req.query.publisher
       
    };
    const axiosParams = querystring.stringify({ ...query});
    axios.get(`https://www.etnassoft.com/api/v1/get/?${axiosParams}`)
        .then((response) => {
            res.json(response.data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
   
}

async function saveLibraMongoDb(req, res){
    const response = await apodMongoService.saveLibra(req[0]);
        res.json(response);
    }




async function saveBD(req, res){
    const query = {
        id: req.query.id,
        title: req.query.book_title,
        book_author: req.query.book_author,
        publisher: req.query.publisher
          
        };
    const axiosParams = querystring.stringify({ ...query})
        console.log(axiosParams);
    await  axios.get(`https://www.etnassoft.com/api/v1/get/?${axiosParams}`)
    
            .then((response) => {
                
                saveLibraMongoDb(response.data,res);
                
            })
            .catch(err => {
                res.status(500).json(err);
            });
    }


module.exports = {getApiLibra,getApiLibraAuthor, saveBD};
