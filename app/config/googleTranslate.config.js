const apiKey = process.env.API_KEY_TRANSLATE;

const optionTranslateText = {
  method: "POST",
  url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "accept-encoding": "application/gzip",
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": "google-translate1.p.rapidapi.com",
  },
};

const optionGetLanguages = {
  method: "GET",
  url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
  headers: {
    "accept-encoding": "application/gzip",
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": "google-translate1.p.rapidapi.com",
  },
};

module.exports = { optionTranslateText, optionGetLanguages };
