const express = require('express');

const bodyParser = require('body-parser');

const compression = require('compression');

const app = express();

app.use(bodyParser.json()); // for parsing application/json

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function (request, response) {

response.sendFile(__dirname + '/dist/index.html');

});

app.use(express.static( `${__dirname}/dist` ) );

app.use(compression());

app.get('*', function (request, response) {

    response.sendFile(__dirname + '/dist/index.html');
    
});
    
module.exports = app;