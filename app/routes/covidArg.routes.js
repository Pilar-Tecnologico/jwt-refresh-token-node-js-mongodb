const covidArgController = require('../controllers/covidArg.controller')

module.exports = function(app) {
  app.get("/covid/argentina", function(req, res) {
      covidArgController.getSumary(req, res)
    });    
};
