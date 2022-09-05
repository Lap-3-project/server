const User = require('../models/User')


const findAll = async (req,res) => {
    try {
        const users = await User.find({});
        res.status(200).json({users})
       } catch (error) {
        res.status(404).json({message: error})
    }
}



const findUser = async (req,res) => {
    try {
        const user = await User.findOne({"username": req.params.username});
        if (!user) {
            return res.status(404).send();
        } else {
        res.status(201).json({user})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error})
    }


}

const createUser = async (req,res) => {
    try {
        const username = req.body.username
        const user = await User.create({'username': username,})
        res.status(201).json({username: username, message: 'User created'})
    } catch (error) {
        res.status(500).json({message: error})
    }

}

module.exports = {
    findAll,
    findUser,
    createUser

}