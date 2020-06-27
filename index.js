var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/port', function (req, res) {
  res.send(`The port used is ${process.env.PORT}`)
})

app.listen(process.env.PORT || 3000)

