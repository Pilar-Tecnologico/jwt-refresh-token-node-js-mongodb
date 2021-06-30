
const nasaController = require('../controllers/nasa.controller');
const gisController = require('../controllers/gis.controller');
const libraController = require('../controllers/libra.controller');

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.operatorBoard = (req, res) => {
  res.status(200).send("Operator Content.");
};

exports.apiaBoard = (req, res) => {
  nasaController.getPictureOfTheDay(req, res);
 
};

exports.apibBoard = (req, res) => {
  nasaController.getMarsPicture(req, res);
  
};
exports.apicBoard = (req, res) => {
  nasaController.savePictureOfTheDate(req, res);
 
};


exports.apigisBoard = (req, res) => {
  gisController.getCityDate(req, res);
 
};

exports.apiLibraBoard = (req, res) => {
  libraController.getApiLibra(req, res);
 
};

exports.apiLibraAuthorBoard = (req, res) => {
  libraController.getApiLibraAuthor(req, res);
 
};

exports.apisaveLibraBoard = (req, res) => {
  libraController.saveBD(req, res);
 
};


