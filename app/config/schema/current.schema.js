const schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const currentSchema = new schema({
    name: String,
    main: {
        temp: String,
       feels_like: String,
       temp_min: String,
       temp_max: String,
       pressure: String,
       humidity: String,
       sea_level: String,
       grnd_level: String,
       
    } 
    
});

module.exports = mongoose.model('current', currentSchema);
