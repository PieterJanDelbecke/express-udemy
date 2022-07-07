const express = require("express")
const app = express()
const port = 3000

app.use('/users', (req, res) => {
    res.send("users page")
})
app.use('/', (req, res) => {
    res.send("main page")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})