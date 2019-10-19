const mongoose = require('mongoose');
var Cat = mongoose.model('Cat');

module.exports = {
    index: function (req, res) {
        var cats = []
        Cat.find({}, function(err,data){
            if(err){
                console.log("Error occured")
            } else {
                cats = data;
                res.render('index', {cats_info:cats});
            }
        })
    },
    new: function (req, res) {
       res.render('newcat');
     },
    
     create: function (req, res) {
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
     },
     show: function (req, res) {
        Cat.find({_id:req.params.id}, function(err,data){
            if(err){
                console.log("Error occured on showcat")
            } else {
                res.render('showcat', {cats_info:data});
            }
        })
      },

      edit: function (req, res) {
        Cat.find({_id:req.params.id}, function(err,data){
            if(err){
                console.log("Error occured on showcat")
            } else {
                res.render('editcat', {cats_info:data});
            }
        })
      },

      update: function (req, res) {
        console.log("POST DATA", req.body);
        Cat.update({_id:req.params.id}, {name: req.body.name, age: req.body.age}, function(err){
            if(err) {
            console.log('something went wrong !');
            } else { 
            console.log('successfully edited a cat!');
            res.redirect('/');
            }
        })
      },
      
      
      delete: function (req, res) {
        Cat.remove({_id:req.params.id}, function(err){
            if(err) {
            console.log('something went wrong ! ');
            } else { 
            console.log('successfully deleted a cat!');
            }
        res.redirect('/');
        })
      },
}