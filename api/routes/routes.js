const router = require('express').Router();
const userController = require('../controllers/user');
const scoresController = require('../controllers/scores')



// GET routes
router.get('/', userController.findAll);
router.get('/:username', userController.findUser);
router.get('/:username/scores', scoresController.userScores);


// POST routes
router.post('/', userController.createUser)
router.post('/:username/scores', scoresController.updateScore);

module.exports = router;