const server = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const routes = require('./routes/index')

const port = 8000

server.use(cors());
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb+srv://-----', { useNewUrlParser: true, useUnifiedTopology: true })

server.use('/api', routes)

server.listen(port, ( req, res ) => {
    console.log(`Сервер доступен по адресу: http://localhost:${port}`)
})
