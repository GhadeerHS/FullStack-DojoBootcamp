var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.listen(9000, function() {console.log("listening on port 9000");})

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dashboard',{useNewUrlParser:true});
var CatSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('Cat', CatSchema);
var Cat = mongoose.model('Cat');

app.get('/', function(req, res) {
    var cats = []
    Cat.find({}, function(err,data){
        if(err){
            console.log("Error occured")
        } else {
            cats = data;
            res.render('index', {cats_info:cats});
        }
    })
})

app.get('/cats/new', function(req, res) {
    res.render('newcat');
})

app.get('/cats/:id', function(req, res) {
    Cat.find({_id:req.params.id}, function(err,data){
        if(err){
            console.log("Error occured on showcat")
        } else {
            res.render('showcat', {cats_info:data});
        }
    })
})

app.post('/cats', function(req, res) {
    console.log("POST DATA", req.body);
    var cat = new Cat({name: req.body.name, age: req.body.age});
    cat.save(function(err) {
        if(err) {
        console.log('something went wrong');
        } else { 
        console.log('successfully added a cat!');
        }
        res.redirect('/');
    })
})

app.get('/cats/edit/:id', function(req, res) {
    Cat.find({_id:req.params.id}, function(err,data){
        if(err){
            console.log("Error occured on showcat")
        } else {
            res.render('editcat', {cats_info:data});
        }
    })
})

app.post('/cats/:id', function(req, res) {
    console.log("POST DATA", req.body);
    Cat.update({_id:req.params.id}, {name: req.body.name, age: req.body.age}, function(err){
        if(err) {
        console.log('something went wrong !');
        } else { 
        console.log('successfully edited a cat!');
        res.redirect('/');
        }
    })
})

app.get('/cats/destroy/:id', function(req, res) {
    Cat.remove({_id:req.params.id}, function(err){
        if(err) {
        console.log('something went wrong ! ');
        } else { 
        console.log('successfully deleted a cat!');
        }
    res.redirect('/');
    })
})

