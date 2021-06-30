const apisMiddleWares = require('../middlewares/apis');

exports.apiMusicArtis = (req, res) => {
    apisMiddleWares.getAlbumName(req, res);
   };
  exports.apiGeoRef = (req, res) => {
    apisMiddleWares.getCityName(req, res);
   };
  
  exports.apiNasaPic = (req, res) => {
    apisMiddleWares.getPictureOfTheDay(req, res);
   
  };
  
  exports.apiNasaSave = (req, res) => {
    apisMiddleWares.savePictureOfTheDate(req, res);
   
  };
  exports.apiNasaMars = (req, res) => {
    apisMiddleWares.getMarsPicture(req, res);
    
  };
  exports.apiCatsName = (req, res) => {
    apisMiddleWares.getCatsRace(req, res);
    
  };
  exports.apiCatsSave = (req, res) => {
    apisMiddleWares.saveCatsRace(req, res);
    
  };