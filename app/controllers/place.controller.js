const axios = require("axios");
const City = require("../models/place.model");
const apiKey = process.env.WEATHER_API_KEY;

exports.getAllplaces = async (req, res) => {
  try {
    const places = await Place.find({});
    res.status(200).json({
      ok: true,
      message: "Results",
      body: places,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: "Something goes wrong",
    });
  }
};

exports.getOnePlaceByID = async (req, res) => {
  try {
    const place = await Place.findById({ _id: req.params.id });
    res.status(200).json({
      ok: true,
      message: "Search results",
      body: place,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: "Place not found",
    });
  }
};

exports.searchPlace = async (req, res) => {
  const { city, country } = req.body;

  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`
    );
    const newPlace = new Place({
      temp: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      temp_min: response.data.main.temp_min,
      temp_max: response.data.main.temp_max,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      sea_level: response.data.main.sea_level,
      grnd_level: response.data.main.grnd_level,
      name: response.data.name,
    });
    await newPlace.save();
    res.status(200).json({
      ok: true,
      message: "The place was saved",
      body: newPlace,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: "Error",
    });
  }
};

exports.deletePlace = async (req, res) => {
  try {
    await Place.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({
      ok: true,
      message: "The place was deleted",
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: "Error: The place cannot been deleted",
    });
  }
};

exports.editPlace = async (req, res) => {
  try {
    const PlaceEdited = await Place.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      ok: true,
      message: "The place was edited",
      body: placeEdited,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: "Error: The Place cannot been edited",
    });
  }
};
