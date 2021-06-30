const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const apiAudioSchema = new Schema({
    strAlbum: String,
    intYearReleased: String
});

module.exports = mongoose.model('apiAudio', apiAudioSchema);