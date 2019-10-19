var express = require('express');
var app = express();
const mongoose = require('mongoose');
const db = require('./server/config/mongoose.js');
const Person = require('./server/models/person.js');

require('./server/config/routes.js')(app)

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(9000, function() {console.log("listening on port 9000");})



