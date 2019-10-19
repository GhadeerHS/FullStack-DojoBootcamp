const mongoose = require('mongoose');

module.export = (() =>mongoose.connect('mongodb://localhost/mongoose_dashboard',{useNewUrlParser:true}))
