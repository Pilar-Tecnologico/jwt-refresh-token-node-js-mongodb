const myApi = require('./api.controller');

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
  myApi.getAlbum(req, res);
};

exports.catBoard = (req, res) => {
  myApi.getCat(req, res);
};

exports.pizzaBoard = (req, res) => {
  myApi.getPizza(req, res);
};

exports.songBoard = (req, res) => {
  myApi.getSong(req, res);
};

exports.catSaveBoard = (req, res) => {
  myApi.postCat(req, res);
};