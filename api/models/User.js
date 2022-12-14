const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: [20, 'username length can be max 20 characters'],
        trim: true
    },
    scores: {
        animals: {
            type: Number,
            default: 0
        },
        generalKnowledge: {
            type: Number,
            default: 0
        },
        sports: {
            type: Number,
            default: 0
        },
        compScience: {
            type: Number,
            default: 0
        },
        videoGames: {
            type: Number,
            default: 0
        },
        films: {
            type: Number,
            default: 0
        }
    }


})

module.exports = mongoose.model('User', UserSchema, 'Users');