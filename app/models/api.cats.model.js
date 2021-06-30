const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const apiCatsSchema = new Schema(
    [
        {     
          id: String,
          name: String,
          origin: String,
          description: String,
          life_span: String
        }
    ]
    );

module.exports = mongoose.model('apiCats', apiCatsSchema);