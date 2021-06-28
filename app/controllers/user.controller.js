const apiController = require('./api.controller')


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

exports.musicBoard = (req, res) => {
  apiController.getMusic(req,res);
};

exports.catBoard = (req, res) => {
  apiController.getCat(req,res);
};

exports.saveBoard = (req, res) => {
  apiController.postCat(req,res);
};

exports.songBoard = (req, res) => {
  apiController.getSong(req,res);
};

exports.pizzaBoard = (req, res) => {
  apiController.getPizza(req,res);
};

