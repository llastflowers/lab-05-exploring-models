require('dotenv').config();
require('../lib/utils/connect')();
const request = require('supertest');
const app = require('../lib/app');
const mongoose = require('mongoose');

describe('application routes', () => {
    beforeAll(done => {
        done();
    });
      
    afterAll(done => {
        // Closing the DB connection allows Jest to exit successfully.
        mongoose.connection.close();
        done();
    });
    it('has a home route that says i am a candle', () => {
        return request(app)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({ text: 'i am a candle' });
            });
    });

    it('has a /candle post route', () => {
        return request(app)
            .post('/candle')
            .send({
                type: 'soy',
                scent: 'vetiver',
                oz: 7.5
            })
            .then(res => {
                expect(res.body).toEqual({
                    __v: expect.any(Number),
                    _id: expect.any(String),
                    type: 'soy',
                    scent: 'vetiver',
                    oz: 7.5
                });
            });
    });
});