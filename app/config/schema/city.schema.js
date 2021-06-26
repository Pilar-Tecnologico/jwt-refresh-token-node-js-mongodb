const schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const citySchema = new schema({
    provincias: [
            {
                id: String,
                centroide: {
                    lat: String,
                    lon: String
                },
                nombre: String
            }
        ],
});

module.exports = mongoose.model('city', citySchema);