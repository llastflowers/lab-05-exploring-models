const express = require('express');
const app = express();
const Candle = require('./models/Candle');

app.use(express.json());

app.get('/', (req, res) => {
    res.send({ text: 'i am a candle' });
});

// findById

app.post('/candle', (req, res) => {
    const { type, scent, oz } = req.body;
    Candle.create({
        type,
        scent,
        oz
    })
        .then(newCandle => {
            res.send(newCandle);
        });
});

// findByIdAndUpdate

// findByIdAndDelete

module.exports = app;