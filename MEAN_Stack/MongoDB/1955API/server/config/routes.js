const persons = require('../controllers/persons.js')


module.exports = function(app){
    app.get("/", function(req, res){
        persons.index(req, res);
    });
    app.get("/new/:name", function(req, res){
        persons.createperson(req, res);
    });
    app.get("/:name", function(req, res){
        persons.showperson(req, res);
    });
    app.get("/remove/:name", function(req, res){
        persons.deleteperson(req, res);
    });
}