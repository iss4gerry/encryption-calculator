const express = require('express')
const router = express.Router()
const appController = require('../controllers/controller')


router.route('/').get(appController.appViews)
router.route('/symmetric/encrypt').post(appController.encryptData)
router.route('/symmetric/decrypt').post(appController.decryptData)
router.route('/asymmetric/encrypt').post(appController.asymEncrypt)
router.route('/asymmetric/decrypt').post(appController.asymDecrypt)

module.exports = router