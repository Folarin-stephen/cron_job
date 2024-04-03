const express = require('express')
const router = express.Router();
const controller = require('../controller/user_controller')
const userMiddleware = require('../middlewares/usermiddleware')

router.get('/',  controller.welcome)
router.get('/form', controller.welcomeForm )
router.post('/register', userMiddleware.validateRegister, controller.register)


module.exports = router