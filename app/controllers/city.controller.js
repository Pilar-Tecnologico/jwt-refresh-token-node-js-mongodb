const axios = require("axios").default;
const querystring = require("querystring");
const db = require("../models");
const { city: City } = db;

async function getCity(req, res) {
  const query = {
    nombre: req.query.nombre,
    max: 100,
  };
  const axiosParams = querystring.stringify({ ...query });
  axios
    .get(`https://apis.datos.gob.ar/georef/api/provincias?${axiosParams}`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

async function postCity(req, res) {
  const query = {
    nombre: req.body.nombre,
    max: 100,
  };
  const axiosParams = querystring.stringify({ ...query });
  axios
    .get(`https://apis.datos.gob.ar/georef/api/provincias?${axiosParams}`)
    .then((response) => {
      const newCity = new City({
        centroide: {
          lat: response.data.provincias[0].centroide.lat,
          lon: response.data.provincias[0].centroide.lon,
        },
        nombre: response.data.provincias[0].nombre,
      });

      newCity.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
      res.send({ message: "New City Add to DB" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

module.exports = { getCity, postCity };
