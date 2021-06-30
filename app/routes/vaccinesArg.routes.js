const vaccinesArgController = require('../controllers/vaccinesArg.controller')
const { authJwt } = require("../middlewares")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/vaccines/argentina", [authJwt.verifyToken, authJwt.isUser], vaccinesArgController.getVaccinesSumary); 
};
