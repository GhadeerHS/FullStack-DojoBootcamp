var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));
app.set('images', __dirname + '/images');
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/cats", function (request, response){
    var cats_array = [
        {source: "/images/cutecat.jpeg", name: "cuddles"},
        {source: "/images/sleepycat.jpg", name: "losi"},
        {source: "/images/sadcat.jpeg", name: "dona"}
    ];
    response.render('cats', {cats: cats_array});
})

app.get("/cuddles", function (request, response){
    var cat_info = [
        {
            source: "/images/cutecat.jpeg", 
            name: "Cat1", 
            food: "Spaghetti", 
            age: "3", 
            spots:["Under the bed","In a sunbeam"]
        }
    ];
    response.render('cuddles', {cat: cat_info});
})

app.get("/losi", function (request, response){
    var cat_info = [
        {
            source: "/images/sleepycat.jpg", 
            name: "Losi", 
            food: "Tuna", 
            age: "9", 
            spots:["Under the bed","In a sunbeam"]
        }
    ];
    response.render('cuddles', {cat: cat_info});
})

app.get("/dona", function (request, response){
    var cat_info = [
        {
            source: "/images/sadcat.jpeg", 
            name: "Dona", 
            food: "Fish", 
            age: "2", 
            spots:["Under the bed","In a sunbeam"]
        }
    ];
    response.render('cuddles', {cat: cat_info});
})

app.listen(9000, function() {
  console.log("listening on port 9000");
})