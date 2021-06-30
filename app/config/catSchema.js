const Schema = require ('mongoose').Schema;
const mongoose = require ( 'mongoose');


const apiCatSchema =  new Schema(
    [{

    id:  String,
    name:  String

    }]);

module.exports = mongoose.model('catdb', apiCatSchema);