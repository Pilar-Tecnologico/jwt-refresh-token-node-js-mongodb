const axios = require("axios").default;
const qs = require("qs");
const config = require("../config/googleTranslate.config");

async function translateText(req, res) {
  const textToTranslate = req.body.text;
  const targetLanguage = req.body.target;
  const sourceLanguage = req.body.source;

  config.optionTranslateText.data = qs.stringify({
    q: textToTranslate,
    target: targetLanguage,
    source: sourceLanguage,
  });

  axios
    .request(config.optionTranslateText)
    .then(function (response) {
      res
        .status(200)
        .json(response.data.data["translations"][0]["translatedText"]);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}

async function getSupportedLanguages(req, res) {
  axios
    .request(config.optionGetLanguages)
    .then(function (response) {
      languages = response.data.data.languages;
      res.status(200).json(languages);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}

module.exports = { translateText, getSupportedLanguages };
