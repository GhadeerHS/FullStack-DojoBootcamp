var express = require("express");
var app = express();

app.get('/', function(request, response) {
   response.send("<h1>Hello Express</h1>");
})

app.use(express.static(__dirname + "/static"));
app.set('images', __dirname + '/images');
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/cars", function (request, response){
    var cars_array = [
        {source: "/images/fer.jpg"},
        {source: "/images/rangeroverjpg.jpg"},
        {source: "/images/modren.jpeg"}
    ];
    response.render('cars', {cars: cars_array});
})

app.get("/cats", function (request, response){
  var cats_array = [
      {source: "/images/cutecat.jpeg"},
      {source: "/images/sleepycat.jpg"},
      {source: "/images/sadcat.jpeg"}
  ];
  response.render('cats', {cats: cats_array});
})

app.get("/form", function (request, response){
  response.render('form');
})

app.listen(9000, function() {
  console.log("listening on port 9000");
})