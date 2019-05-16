const mongoose = require('mongoose');

const BeerSchema = mongoose.Schema({
    beerName: {
        type: String,
        required: true
    },
    breweryName: {
        type: String,
        required: true
    },
    countryOfOrigin: {
        type: String,
    },
    image: {
        type: String,
    },
    type: {
        type: String,
    },
    alcoholContent: {
        type: Number,
    },
    description: {
        type: String,
    }
});

module.exports = mongoose.model('Beers', BeerSchema);