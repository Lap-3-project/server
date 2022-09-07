const supertest = require('supertest');
const app = require('../api/app');
const mongoose = require('mongoose');
require('dotenv').config();

describe('App routes', () => {
    let api;

    beforeAll(async () => {
        await mongoose
            .connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
            })
            .then(() => {
                api = app.listen(5070)
            })
    });

    afterAll((done) => {
        console.log('stopping server');
        api.close(done);
    })

    it('It retrieves the welcome message', async () => {
        const response = await supertest(api).get('/')
            expect(response.statusCode).toBe(200)
    });




})