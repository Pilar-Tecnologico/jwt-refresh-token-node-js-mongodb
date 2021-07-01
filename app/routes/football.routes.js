const controllerFootball = require('../controllers/football.controller');

module.exports = function (app) {

    app.get('/api/football/teams/:id', controllerFootball.getTeams);

    app.get('/api/football/countries', controllerFootball.getCountries);

    app.get('/api/football/leagues', controllerFootball.getLeagues);

};

