var mongoose = require('mongoose');

mongoose.mongoConnect = () => {
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/ninja_gold', { useNewUrlParser: true })
    .then(() => {
        console.log('mongoDB is connected...')
        })
        .catch((err) => {
        throw err
        })
        }