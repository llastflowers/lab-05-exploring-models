const express = require('express');
const app = express();
const Candle = require('./models/Candle');

app.use(express.json());

app.get('/', (req, res) => {
    res.send({ text: 'i am a candle' });
});

app.get('/:id', (req, res) => {
    console.log(req.params);
    Candle.findById(req.params.id)
        .then(requestedCandle => {
            res.send(requestedCandle);
        });
});

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

app.put('/update/:id', (req, res) => {
    Candle.findByIdAndUpdate(req.params.id, req.body)
        .then(updatedCandle => res.send(updatedCandle));
});
  
app.delete('/delete/:id', (req, res) => {
    Candle.findByIdAndDelete(req.params.id)
        .then(deletedCandle => res.send(deletedCandle));
});

module.exports = app;