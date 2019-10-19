var express = require("express");
var app = express();

app.get('/', function(request, response) {
   response.send("<h1>Hello Express</h1>");
})

app.use(express.static(__dirname + "/static"));

app.listen(9000, function() {
  console.log("listening on port 9000");
}) 