const mongoose = require('mongoose')

async function connectDB(url) {
//    console.log(url);
    const success =  await mongoose
    .connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
   return success;
}

module.exports = connectDB