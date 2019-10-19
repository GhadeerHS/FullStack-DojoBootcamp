const quotes = require('../controllers/cats.js')


module.exports = function (app) {
    app.get('/', function(req, res) {
        Cats.index(req, res);
    })
    
    app.get('/cats/new', function(req, res) {
        Cats.new(req, res);
    })
    
    app.get('/cats/:id', function(req, res) {
        Cats.create(req, res);
    })
    
    app.post('/cats', function(req, res) {
        Cats.show(req, res);
    })
    
    app.get('/cats/edit/:id', function(req, res) {
        Cats.edit(req, res);
    })
    
    app.post('/cats/:id', function(req, res) {
        Cats.update(req, res);
    })
    
    app.get('/cats/destroy/:id', function(req, res) {
        Cats.delete(req, res);
    })
}