var express = require("express");
var app = express();
var server = app.listen(9000);
var io = require("socket.io")(server);
var color = "";

app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

io.on("connection", function(socket){
    console.log("Connected!");
    socket.emit("launch", {
        bgc : color
    });
    socket.broadcast.emit("launch", {
        bgc : color
    });

    socket.on("green", function(){
        socket.emit("green_bg");
        socket.broadcast.emit("green_bg");
        color = "green"
    });
    socket.on("blue", function(){
        socket.emit("blue_bg");
        socket.broadcast.emit("blue_bg");
        color = "blue"
    });
    socket.on("pink", function(){
        socket.emit("pink_bg");
        socket.broadcast.emit("pink_bg");
        color = "pink"
    });
});

app.get("/", function(req, res){
    res.render("index");
});