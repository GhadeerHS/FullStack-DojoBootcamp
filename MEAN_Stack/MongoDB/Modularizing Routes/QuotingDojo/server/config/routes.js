const mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

// const quotes = require('../../server.js');

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render('index')
    });
    app.get('/quotes', (req, res) => {
        Quote.find()
        .then(data => res.render("quotes", {quotes: data}))
        .catch(err => res.json(err));
    });

    app.post("/quotes", (req, res) => {
        const quote = new Quote();
        quote.name = req.body.name;
        quote.content = req.body.quote;
        quote.created_at = Date.now();

        quote.save()
        .then(newQuote => console.log('quote created: ', newQuote))
        .catch(err => console.log(err));
        
        res.redirect('/');
    })
}