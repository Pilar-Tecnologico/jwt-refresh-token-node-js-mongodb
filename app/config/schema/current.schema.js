const schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const currentSchema = new schema({
    name: String,
    main: {
        temp: Number,
       feels_like: Number,
       temp_min: Number,
       temp_max: Number,
       pressure: Number,
       humidity: Number,
       sea_level: Number,
       grnd_level: Number,
       
    } 
    
});

module.exports = mongoose.model('current', currentSchema);
