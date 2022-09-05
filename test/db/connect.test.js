const connectDB = require('../../db/connect');
require('dotenv').config()

describe('Database', () => {

        test('check connection to the database', async () => {
            let response = await connectDB(process.env.MONGO_URI)
            expect(typeof response).toBe('object')
            response.disconnect();
        });
})