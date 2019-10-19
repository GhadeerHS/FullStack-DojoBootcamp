var express = require("express");
var app = express();
var path = require("path");
var session = require('express-session');

const server = app.listen(9000);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, "/static")));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
io.on('connection', function (socket) {
    console.log("Connected!");
	socket.on("post", function (data){
        var num = Math.floor(Math.random()*1000);
        var object = JSON.stringify(data);
    	socket.emit('message', {
            info: `The data sent via form is: ${object}.`
        });
        socket.emit('random_number', {
            message:`Your lucky emmitted number is: ${num}!`
        });
    });
});

app.get('/', function(req, res) {
    res.render("index");
});

// app.post("/results", function(req, res){
// 	console.log(req.body);
// 	res.render('results', req.body);
// });
