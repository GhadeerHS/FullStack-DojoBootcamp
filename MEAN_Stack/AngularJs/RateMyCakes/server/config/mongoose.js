const mongoose = require('mongoose');

mongoose.mongoConnect = () => {
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/rate_my_cakes',{useNewUrlParser: true})
    .then(() => {
        console.log('mongoDB is connected...')
        })
        .catch((err) => {
        throw err
        })
        }