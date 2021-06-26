const current = require('../controllers/current.controller');
const city = require('../controllers/city.controller');

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

exports.city=(req, res) => {
  city.getCity(req, res);
};

exports.saveCity=(req, res) => {
  city.postCity(req, res);
};

exports.current=(req, res) => {
  current.getCurrent(req, res);
};

exports.saveCurrent=(req, res) => {
  current.postCurrent(req, res);
};

