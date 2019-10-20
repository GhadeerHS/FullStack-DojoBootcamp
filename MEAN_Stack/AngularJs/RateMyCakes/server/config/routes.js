const cakes = require("../controllers/cakes.js");
const reviews = require("../controllers/reviews.js");

module.exports = function(app){
    app.get("/cakes", function(req, res){
        cakes.allcakes(req, res);
    });

    app.post("/cakes/new", function(req, res){
        cakes.createcake(req, res);
    });

    app.get("/reviews/:id", function(req, res){
        console.log(req.body + "here");
        reviews.allreviews(req, res);
    });
    app.post("/reviews/new", function(req, res){
        reviews.createreview(req, res);
    });
}