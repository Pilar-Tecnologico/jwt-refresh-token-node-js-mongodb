const covidTweetsController = require('../controllers/covidTweets.controller')

module.exports = function(app) {
  app.get("/covid/tweets", function(req, res) {
      covidTweetsController.getTweets(req, res)
    });    
};
