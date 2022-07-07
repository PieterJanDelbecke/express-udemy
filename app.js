const http = require('http')

const express = require('express')

const app = express()

app.use('/add-product',(req, res, next) => {
    console.log("In next middleware")
    res.send({firstName: "Pieter-jan", lastName: "Delbecke", awesome: true })
})

app.use('/',(req, res, next) => {
    console.log("In next middleware")
    res.send('<h1>Hello from express, normal </h1>')
})

const server = http.createServer(app)

server.listen(3000)

