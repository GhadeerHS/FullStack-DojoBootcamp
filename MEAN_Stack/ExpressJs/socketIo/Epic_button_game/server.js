var express = require("express");
var app = express();
var server = app.listen(9000);
var io = require("socket.io")(server);
var counter = 0;

app.use(express.static(__dirname +"/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

io.on("connection", function(socket){
     socket.emit("new_count", {
        newCount : `This button has been pushed ${counter} times(s)!`
    });
    socket.broadcast.emit("new_count", {
        newCount : `This button has been pushed ${counter} times(s)!`
    });
    socket.on("epic", function(){
        counter += 1;
        socket.emit("new_count", {
            newCount : `This button has been pushed ${counter} times(s)!`
        });
        socket.broadcast.emit("new_count", {
            newCount : `This button has been pushed ${counter} times(s)!`
        });
    })
    socket.on("reset", function(){
        counter = 0;
        socket.emit("reset_count", {
            newCount : `This button has been pushed ${counter} times(s)!`
        });
        socket.broadcast.emit("reset_count", {
            newCount : `This button has been pushed ${counter} times(s)!`
        });
    })
})

//Routes
app.get("/", function(req, res){
    res.render("index");
})