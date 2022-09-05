const supertest = require('supertest');
const app = require('../../api/app');
const mongoose = require('mongoose');
require('dotenv').config();


describe('Scores controllers', () => {

    beforeAll(async () => {
        await mongoose
            .connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
            })
            .then(() => {
                api = app.listen(5060)
            })
    });

    afterAll((done) => {
        console.log('stopping server');
        api.close(done);
    });

    it('It returns one users scores', async () => {
        const response = await supertest(api).get('/users/admin/scores')
        expect(response.statusCode).toEqual(200)
    
    });

    it('It updates a users score', async () => {
        const response = await supertest(api).post('/')
    })


})

it('it updates a score', async () => {
    const response = await supertest(api).post('/users/admin/scores')
        .send({
            "username": "admintest",
            "category": "sports",
            "score": "7"
        })
        .set('Accept', 'application/json');

    expect(response.body.category).toBeDefined();
    expect(response.body.score).toBeDefined();
    expect(response.statusCode).toEqual(201);
})