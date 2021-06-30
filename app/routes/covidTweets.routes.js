const covidTweetsController = require('../controllers/covidTweets.controller')
const { authJwt } = require("../middlewares")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.get("/covid/tweets", [authJwt.verifyToken, authJwt.isUser], covidTweetsController.getTweets); 
};
