require("../models/cake.js");

const mongoose = require("mongoose");
const Cake = mongoose.model("Cake");

module.exports = {
    allcakes: function(req, res){
        Cake.find({}, function(err, data){
            if(err){
                console.log("err retrieving all cakes")
                res.json({message: "Error", error: err});
            } else {
                res.json({data});
            }
        });
    },
    createcake: function(req, res){
        Cake.create(req.body, function(err, data){
            console.log(req.body);
            if(err){
                console.log("err creating cake");
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: data});
            }
        });
    },
    readcake: function(req, res){
        Cake.findOne(req.params, function(err, data){
            if(err || data == null){
                console.log("err reading cake");
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: data});
            }
        });
    },
};