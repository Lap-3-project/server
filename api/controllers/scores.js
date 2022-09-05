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

const updateScore = async (req,res) => {

    try {
        const user = await User.findOne({"username": req.params.username})
        const newScore = req.body.score
        switch (req.body.category) {
            case 'animals':
                if(user.scores.animals < newScore) {
                    user.scores.animals = newScore
                } else {
                    break;
                }
          
            case 'generalKnowledge':
               if(user.scores.generalKnowledge < newScore) {
                    user.scores.generalKnowledge < newScore
               }else {
                   break;
               }

            case 'sports':
                if(user.scores.sports < newScore) {
                    user.scores.sports = newScore
                }else {
                    break;
                }
                

            case 'compScience':
                if(user.scores.sports < newScore) {
                    user.scores.sports = newScore
                } else {
                    break;
                }
            
            case 'videoGames':
                if(user.scores.videoGames < newScore) {
                    user.scores.videoGames = newScore
                } else {
                    break;
                }

            case 'films':
                if(user.scores.films < newScore) {
                    user.scores.films = newScore
                }
                break;

            default:
                return 

        }
        user.save()
        res.json({message: "User's habit updated"})
            

    } catch (error) {
        console.log('Cannot update score')
        res.status(500).json({error: error})
    }
}

module.exports= {
    userScores,
    updateScore
}