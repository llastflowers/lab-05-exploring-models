const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    oz: {
        type: Number,
        required: true,
        min: 0.5
    },
    scent: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Candle', schema);