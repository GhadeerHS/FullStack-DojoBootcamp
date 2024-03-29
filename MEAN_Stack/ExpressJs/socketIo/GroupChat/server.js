var express = require("express");
var app = express();
var server = app.listen(9000);
var io = require("socket.io")(server);
var id = 0;
var messages = {};
var users = {};

app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

io.on("connection", function(socket){
    console.log("Connected!");
	socket.on("new_user", function(data){
		users[socket.id] = {name:data.name};
		socket.emit('existing_messages', messages);
		io.emit("display_new_user", {name:data.name})
	});
	socket.on("new_message", function(data){
		messages[id] = {name:data.name, message:data.message};
		io.emit("update_messages", messages[id]);
		id++;
	})
	socket.on("disconnect", function(){
		io.emit("user_disconnect", users[socket.id])
	})
})

app.get("/", function(req, res){
    res.render("index");
})