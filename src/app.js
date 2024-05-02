const express = require('express')
const router = require('./routes/route')
const app = express()
const path = require('path')

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use(router)

module.exports = app  