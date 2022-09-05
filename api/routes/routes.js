const router = require('express').Router();
const userController = require('../controllers/user');



// GET routes
router.get('/', userController.findAll);
router.get('/:username', userController.findUser);
// router.get('/:username/scores', userController.findUserScore);


// POST routes
router.post('/', userController.createUser)

module.exports = router;