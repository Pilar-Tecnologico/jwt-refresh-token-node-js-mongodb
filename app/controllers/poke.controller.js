const axios = require('axios').default;
const {log : Log} = require("../models");

exports.getPokemon = async (req, res) => {
    pokemon = req.params.pokemon
    if ( !pokemon ) {
        res.status(403).send("Choose a pokemon!")
    }
    console.log("search: " , pokemon);
    console.log(req.userId)

    const NewLog = new Log({
        user : req.userId,
        route : req.get('host'),
        params : req.originalUrl,
        status : req.status,
    })
    await NewLog.save()
    

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => {
            let data = response.data
            delete data.links
            delete data.game_indices
            delete data.held_items            
            delete data.held_items
            delete data.moves
            delete data.sprites
            data.stats = data.stats.map( (stat) => ({name: stat.stat.name, base: stat.base_stat}))
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(404).json({
                "code": "Not Found",
                "message": "Don't find the requested pokemon"
            });
        });
    
};

exports.listPokemon = (req, res) => {
    
    //Get the first 151 pokemon from the first games
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0`)
    .then((response) => {
        let data = response.data.results
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json({
            "code": "internal_server_error",
            "message": "Something went wrong"
        });
    });
};

exports.lastUses = async (req, res) => {
    
    const data = await Log.find({}).sort('createdAt').limit(5).
        populate('user', 'username');
    //console.log(data)
    if ( data ) {
        res.status(200).json(data);
    } else {
        res.status(500).json({
            "code": "internal_server_error",
            "message": "Something went wrong"
        });
    }
}