const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const routes = require('./routes/index')

const port = 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb:-----', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', routes)

app.listen(port, ( req, res) => {
  console.log(`Сервер доступен по адресу: http://localhost:${port}`)
})
