const express = require("express");
const bodyParser = require("body-parser");
const dbConnection = require("./db/init");
const server = express();

const router = require('./route')

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use('/api', router);

dbConnection();

server.listen(3000, function(){
    console.log("server started on port 3000");       
})