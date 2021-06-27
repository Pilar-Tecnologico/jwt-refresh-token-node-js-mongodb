const controller = require('../controllers/city.controller');
const { authJwt } = require('../middlewares');

module.exports = function(app) {
    app.post(
        "/city",
        //[authn...]
        controller.postCity
    )
};