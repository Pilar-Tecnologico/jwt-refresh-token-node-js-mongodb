const express = require("express");
const router = express.Router();

const apiController = require("../controllers/apiVerifier.controller");

router.get("/verify", async (req, res) => {
  apiController.verifyDomain(req, res);
});

module.exports = router;
