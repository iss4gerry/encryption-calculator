const httpStatus = require('http-status')
const { appService } = require('../service/index')

const appViews = async (req, res) => {
    try {
        res.render('./views')
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send({
            status: httpStatus.BAD_REQUEST,
            data: error
        })
    }
}

const encryptData = async (req, res) => {
    try {
        const plaintext = req.body.plaintext
        const key = req.body.key
        const iv = req.body.iv
        const result = await appService.encryptData(plaintext, key, iv)

        res.status(httpStatus.OK).send({
            status: httpStatus.OK,
            message: 'Success!',
            data: result
        })
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send({
            status: httpStatus.BAD_REQUEST,
            data: error
        })
    }
}

const decryptData = async (req, res) => {
    try {

        const encryptedText = req.body.encryptedText
        const key = req.body.key
        const iv = req.body.iv
        const result = await appService.decryptData(encryptedText, key, iv)

        res.status(httpStatus.OK).send({
            status: httpStatus.OK,
            message: 'Success!',
            data: result
        })
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send({
            status: httpStatus.BAD_REQUEST,
            data: error
        })
    }
}

const asymEncrypt = async (req, res) => {
    try {
        const plaintext = req.body.plaintext
        const publickey = req.body.publickey
        const result = await appService.asymEncrypt(plaintext, publickey)

        res.status(httpStatus.OK).send({
            status: httpStatus.OK,
            message: 'Success!',
            data: result
        })
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send({
            status: httpStatus.BAD_REQUEST,
            data: error
        })
    }
}

const asymDecrypt = async (req, res) => {
    try {
        const encryptedtext = req.body.encryptedtext
        const privatekey = req.body.privatekey
        const result = await appService.asymDecrypt(encryptedtext, privatekey)

        res.status(httpStatus.OK).send({
            status: httpStatus.OK,
            message: 'Success!',
            data: result
        })
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send({
            status: httpStatus.BAD_REQUEST,
            data: error
        })
    }
}

module.exports = {
    encryptData,
    decryptData,
    appViews,
    asymEncrypt,
    asymDecrypt,
}