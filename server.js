import express from 'express'

import { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static('./dist'))

app.listen(PORT, function () {
	console.log(`Example app listening on port ${PORT}!`)
})

app.use('/login', function (req, res) {
	res.status(200).sendFile(__dirname + '/dist/index.html')
})

app.use('/main', function (req, res) {
	res.status(200).sendFile(__dirname + '/dist/index.html')
})

app.use('/404', function (req, res) {
	res.status(200).sendFile(__dirname + '/dist/index.html')
})

app.use('/signup', function (req, res) {
	res.status(200).sendFile(__dirname + '/dist/index.html')
})

app.use('/editProfile', function (req, res) {
	res.status(200).sendFile(__dirname + '/dist/index.html')
})

app.use('/profile', function (req, res) {
	res.status(200).sendFile(__dirname + '/dist/index.html')
})

app.use('/changePassword', function (req, res) {
	res.status(200).sendFile(__dirname + '/dist/index.html')
})

app.use('/serverError', function (req, res) {
	res.status(200).sendFile(__dirname + '/dist/index.html')
})
