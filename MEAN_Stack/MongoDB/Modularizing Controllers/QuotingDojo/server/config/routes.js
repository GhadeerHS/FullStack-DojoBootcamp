const quotes = require('../controllers/quotes.js')


module.exports = function (app) {
    app.get('/', (req, res) => {
        quotes.index(req, res);
        res.render('index')
    });
    app.get('/quotes', (req, res) => {
        quotes.display(req, res);
    });

    app.post("/quotes", (req, res) => {
        quotes.create(req, res);

    })
}