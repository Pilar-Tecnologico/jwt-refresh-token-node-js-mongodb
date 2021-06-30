const express = require("express");
const router = express.Router();

const apiController = require("../controllers/apiGoogleTranslate.controller");

router.post("/", async (req, res) => {
  apiController.translateText(req, res);
});

router.get("/", async (req, res) => {
  apiController.getSupportedLanguages(req, res);
});

module.exports = router;
