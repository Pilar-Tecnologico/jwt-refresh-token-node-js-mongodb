const axios = require("axios");
const City = require("../models/city.model");
const apiKey = process.env.WEATHER_API_KEY;

exports.getAllcities = async (req, res) => {
    try {
        const cities = await City.find({})
        res.status(200).json({
            ok: true,
            message: "Results",
            body: cities
        })

    } catch (error) {
        res.status(400).json({
            ok: false,
            message: "Something goes wrong"
        })
    }
}

exports.getOneCityByID = async (req, res) => {
    try {
        const city = await City.findById({ _id: req.params.id });
        res.status(200).json({
            ok: true,
            message: "Search results",
            body: city
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: "City not found"
        })
    }
}

exports.searchCity = async (req, res) => {
    const { city, country } = req.body;

    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`);
        const newCity = new City({
            temp: response.data.main.temp,
            feels_like: response.data.main.feels_like,
            temp_min: response.data.main.temp_min,
            temp_max: response.data.main.temp_max,
            pressure: response.data.main.pressure,
            humidity: response.data.main.humidity,
            sea_level: response.data.main.sea_level,
            grnd_level: response.data.main.grnd_level,
            name: response.data.name
        });
        await newCity.save();
        res.status(200).json({
            ok: true,
            message: "City was saved",
            body: newCity
        })

    } catch (error) {
        res.status(400).json({
            ok: false,
            message: "Error"
        })
    }

}

exports.deleteCity = async (req, res) => {
    try {
        await City.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({
            ok: true,
            message: "The city was deleted"
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: "Error: The city cannot been deleted"
        })
    }
}

exports.editCity = async (req, res) => {
    try {
        const cityEdited = await City.findByIdAndUpdate({ _id: req.params.id }, req.body,
            {
                new: true,
            }
        );
        res.status(200).json({
            ok: true,
            message: "City was edited",
            body: cityEdited
        })

    } catch (error) {
        res.status(400).json({
            ok: false,
            message: "Error: The city cannot been edited"
        })
    }
}