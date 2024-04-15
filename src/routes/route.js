const express = require('express')
const router = express.Router()
const appController = require('../controllers/controller')


router.route('/').get(appController.symmetricViews)
router.route('/symmetric/encrypt').post(appController.encryptData)
router.route('/symmetric/decrypt').post(appController.decryptData)

module.exports = router