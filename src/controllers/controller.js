const httpStatus = require('http-status')
const { symmetricService } = require('../service/index')

const symmetricViews = async (req, res) => {
    try {
        res.render('./symmetric/views')
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send({
            status: httpStatus.BAD_REQUEST,
            data: error
        })
    }
}

const getData = async (req, res) => {
    try {
        const result = await symmetricService.getData()
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

const encryptData = async (req, res) => {
    try {
        const plaintext = req.body.plaintext
        const key = req.body.key
        const iv = req.body.iv
        const result = await symmetricService.encryptData(plaintext, key, iv)

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
        const result = await symmetricService.decryptData(encryptedText, key, iv)

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
    getData,
    encryptData,
    decryptData,
    symmetricViews,
}