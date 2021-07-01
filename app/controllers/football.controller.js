const footballServices = require('../services/football.services');
const utils = require('../utils/utils');

const getTeams = async (req, res) => {

    const { id } = req.params;

    if (Number(id) && id.length < 5) {
        const teams = await footballServices.footballTeams(id)
            .then(response => response)
            .catch(err => err);

        if (teams != null) {
            const { result } = teams;
            // 
            await utils.registerPlayers(result[0]);

            res.status(200).json(result);
        } else {
            res.status(400).json({ message: "The Team ID does not exist" });
        }
    } else {
        res.status(400).json({
            message: "the Team ID must be numeric and must only have up to 4 digits"
        })
    }
}


const getCountries = async (req, res) => {
    const countries = await footballServices.footballCoutries()
        .then(response => response)
        .catch(err => err);

    if (countries != null) {
        const { result } = countries;
        res.status(200).json(result)
    } else {
        res.status(400).json({ message: "no results about countries" });
    }
}


const getLeagues = async (req, res) => {
    const leagues = await footballServices.footballLeagues()
        .then(response => response)
        .catch(err => err);

    if (leagues != null) {
        const { result } = leagues;
        res.status(200).json(result)
    } else {
        res.status(400).json({ message: "no results about countries" })
    }
}


module.exports = {
    getTeams,
    getCountries,
    getLeagues
}