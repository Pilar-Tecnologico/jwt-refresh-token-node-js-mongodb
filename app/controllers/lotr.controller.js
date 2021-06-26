// https://the-one-api.dev/
// The Lord of the Rings API.
// Need a token for generate a request.
// Get your access token by registering a free API account. https://the-one-api.dev/sign-up

const axios = require('axios');
const { LOTR_TOKEN } = require('../config/default.config');

// Get all character.
async function getCharacter(req, res){
    await axios({
        method: 'get',
        url: `https://the-one-api.dev/v2/character`,
        headers: {Authorization: `Bearer ${LOTR_TOKEN}`}
      })
        .then((response) => {
            let {docs} = response.data;
            const qRace = req.query.race;
            let qGen = req.query.gender[0].toUpperCase() + req.query.gender.slice(1).toLowerCase();
            if (qRace){
                docs = docs.filter(({race}) => race.toUpperCase() === qRace.toUpperCase());
            }
            if (qGen){
                docs = docs.filter(({gender}) => gender === qGen);
            }
            res.json(docs);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}
// Get all books.
async function getBooks(req, res){
    await axios({
        method: 'get',
        url: `https://the-one-api.dev/v2//book/`,
        headers: {Authorization: `Bearer ${LOTR_TOKEN}`}
      })
        .then((response) => {
            const {docs} = response.data;
            res.json(docs);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

// Get all book's chapters by id.
async function getChapterxBook(req, res){
    // Book 1 - id: 5cf5805fb53e011a64671582
    // Book 2 - id: 5cf58077b53e011a64671583
    // Book 3 - id: 5cf58080b53e011a64671584
    const id = req.params.id;
    await axios({
        method: 'get',
        url: `https://the-one-api.dev/v2/book/${id}/chapter`,
        headers: {Authorization: `Bearer ${LOTR_TOKEN}`}
      })
        .then((response) => {
            res.json(response.data.docs);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

module.exports = {getCharacter, getChapterxBook, getBooks};