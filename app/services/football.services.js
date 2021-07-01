const axios = require('axios');

const url = `https://apiv2.allsportsapi.com/football/`;
const api_key = process.env.API_KEY;
const teams = 'Teams';
const countries = 'Countries';
const leagues = 'Leagues';


async function footballTeams(teamID) {
    return await axios.get(`${url}?&met=${teams}&teamId=${teamID}&APIkey=${api_key}`)
        .then( response => response.data )
        .catch( err => err )
}

async function footballCoutries() {
    return await axios.get(`${url}?&met=${countries}&APIkey=${api_key}`)
    .then( response => response.data )
    .catch( err => err )
}

async function footballLeagues() {
    return await axios.get(`${url}?&met=${leagues}&APIkey=${api_key}`)
        .then( response => response.data )
        .catch( err => err )
}


module.exports = {
    footballTeams,
    footballLeagues,
    footballCoutries
};