const User = require('../models/User')

const userScores = async (req, res) => {

    try {
        const user = await User.findOne({"username": req.params.username})
        res.json(user.scores)
    } catch (error) {
        console.log('Cannot find scores')
        res.status(404).json({message: error})
    }
}

module.exports= {
    userScores
}