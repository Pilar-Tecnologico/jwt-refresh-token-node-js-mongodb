const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const apiLibraSchema = new Schema({
        id: String,
        title: String,
        author: String,
        publisher: String
       
});

module.exports = mongoose.model('apiLibra', apiLibraSchema);





