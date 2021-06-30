const covidWorldController = require('../controllers/covidWorld.controller')
const covidByCountryController = require('../controllers/covidByCountry.controller')
const { authJwt } = require("../middlewares")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.get("/covid/world", [authJwt.verifyToken, authJwt.isUser], covidWorldController.getSumary);
  app.get("/covid/world/:country", [authJwt.verifyToken, authJwt.isUser], covidByCountryController.getSumary);

};
