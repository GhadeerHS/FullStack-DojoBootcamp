const mongoose = require('mongoose');

module.export = (() => mongoose.connect('mongodb://localhost/quotes_db', {useNewUrlParser: true}))
