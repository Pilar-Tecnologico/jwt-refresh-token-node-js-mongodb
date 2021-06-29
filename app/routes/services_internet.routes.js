const controllerInternet = require('../controllers/services_internet.controller'); 

module.exports = function(app){

    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    
    // school services internet
    app.get("/api/services/internet", controllerInternet.getServicesInternet);
}