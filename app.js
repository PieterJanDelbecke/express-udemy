const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }));        // parses incomeing request bodies

app.use(adminRoutes)
app.use(shopRoutes)


const server = http.createServer(app);

server.listen(3000);
