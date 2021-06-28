const { authJwt } = require("../middlewares");
const controllerSchool = require('../controllers/school.controller')

module.exports = function(app) {

    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
      
    app.post('/api/school/add', 
            [authJwt.verifyToken,
             authJwt.isAdmin
            ], 
            controllerSchool.newSchool)

    app.get('/api/school/all', 
           [authJwt.verifyToken,
           authJwt.isAdmin, 
           authJwt.isModerator
           ],
           controllerSchool.getSchool)
}