const mongoose = require('mongoose');

module.export = (() =>mongoose.connect('mongodb://localhost/1955',{useNewUrlParser:true}))
