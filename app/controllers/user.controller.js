const apiCatResponse = require("./apiCatResponse.controller");
const apiGoogleTranslate = require("./apiGoogleTranslate.controller");

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

exports.apiCatResponse = (req, res) => {
  apiCatResponse.getResponse(req, res);
};

exports.apiGoogleTranslate = (req, res) => {
  apiGoogleTranslate.getSupportedLanguages(req, res);
};
