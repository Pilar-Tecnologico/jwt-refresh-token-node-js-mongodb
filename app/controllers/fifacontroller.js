const querystring = require('querystring');
const axios = require('axios').default;
const db = require("../models");
const { club: Club } = db;
const TOKEN = process.env.TOKEN;



//https://futdb.app/ api used 

async function getplayer(req, res){
    
    const  id=req.body.id;
        
        await axios({
            method:'get',
            url: `https://futdb.app/api/players/${id}`,
            headers: {'X-AUTH-TOKEN': `${TOKEN}`}
        })
        .then((response) => {
            let data= response.data 
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        })
    };
//get clubs
async function getfifa(req, res){
    
    const page = `?page=${req.query.page}`
    
    await axios({
        method:'get',
        url: `https://futdb.app/api/clubs${page}`,
        headers: {'X-AUTH-TOKEN': `${TOKEN}`}
    })
    .then((response) => {
        let data= response.data 
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(
            err
            )
        })
    };
    //add club mongo db
    /* const page = `?page=${req.query.page}` */
    async function postClubById(req, res){
        
        const  id=req.body.id;
        
        await axios({
            method:'get',
            url: `https://futdb.app/api/clubs/${id}`,
            headers: {'X-AUTH-TOKEN': `${TOKEN}`}
        })
        .then((response) => {
            const club = new Club({
                id: response.data.item.id,
                name: response.data.item.name,
                league: response.data.item.league
            });
            club.save(err => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
            });
            res.send({ message: "Club was added successfully!" });
        })
        .catch(err => {
            res.status(400).json(err);
        });
    }
    
    module.exports = {getfifa,postClubById,getplayer};

    
    /* async function getfifa(req, res){
    
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
     */
    /* data=data.filter(({club})=> club.name === 'Juventus' ) */