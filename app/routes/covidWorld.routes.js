const covidWorldController = require('../controllers/covidWorld.controller')
const { authJwt } = require("../middlewares")

module.exports = function(app) {
  app.get("/covid/world", [authJwt.verifyToken], covidWorldController.getSumary);    
};
