const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = {
    index: function (req, res) {
        res.render('index');
    },
    display: function (req, res) {
        Quote.find()
        .then(data => res.render("quotes", {quotes: data}))
        .catch(err => res.json(err));
     },
    
     create: function (req, res) {
        const quote = new Quote();
        quote.name = req.body.name;
        quote.content = req.body.quote;
        quote.created_at = Date.now();

        quote.save()
        .then(newQuote => console.log('quote created: ', newQuote))
        .catch(err => console.log(err));
        
        res.redirect('/');
     }
    }