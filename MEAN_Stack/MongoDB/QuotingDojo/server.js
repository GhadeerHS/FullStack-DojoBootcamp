const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({extended: true}));
app.listen(9000, function () {
    console.log("listening on port 9000");
})

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quotes_db', {useNewUrlParser: true});
const dojoQuoteschema = new mongoose.Schema({
    name: String,
    quote: String,
    created_at: Date
});
const quote = mongoose.model('Quote', dojoQuoteschema);
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