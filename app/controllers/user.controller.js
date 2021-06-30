const nationController=require('../controllers/nation.controller');

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


exports.provBoard = (req, res) => {
  nationController.getProvince(req, res);
};

exports.depBoard = (req, res) => {
  nationController.getDepartment(req, res);
};

exports.ubBoard = (req, res) => {
  nationController.getUbication(req, res);
};

exports.saveBoard = (req, res) => {
  nationController.saveUbication(req, res);
};