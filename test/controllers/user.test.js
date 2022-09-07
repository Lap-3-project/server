const supertest = require('supertest');
const app = require('../../api/app');
const mongoose = require('mongoose');
require('dotenv').config();

describe('User controllers', () => {
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
                api = app.listen(5050)
            })
    });

    afterAll((done) => {
        console.log('stopping server');
        api.close(done);
    })

    it('it retrieves users from database', async () => {
       const response = await supertest(api).get('/users')
            expect(response.statusCode).toBe(200)
    })

    it('it checks if it retrieves one user', async () => {
        const response = await supertest(api).get('/users/admin')
            expect(response.statusCode).toEqual(201)
    })

    it('it fails to retrieve one user', async () => {
        const response = await supertest(api).get('/users/fail')
            expect(response.statusCode).toEqual(404)
    })

    it('it creates a new user', async () => {
        const response = await supertest(api).post('/users/')
            .send({
                "username": "admintest"
            })
            .set('Accept', 'application/json');

        // expect(response.headers['content-type']).toBe(/json/);
        expect(response.body.username).toBeDefined();
        expect(response.statusCode).toEqual(201);
    })

    it('it fails to make a new user', async () => {
        const response = await supertest(api).post('/users')
        .send({
            "user": "admintest"
        })
        .set('Accept', 'application/json');

        expect(response.statusCode).toEqual(500)
    })





})