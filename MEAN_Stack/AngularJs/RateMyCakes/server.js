
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const version = '1.0';

app.use(bodyParser.json());
app.use(express.static(__dirname + '/cake/dist/cake'));

app.listen(9000, function () {
    console.log('listening on port 9000');
})

mongoose.mongoConnect = () => {
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/cakes', { useNewUrlParser: true })
    .then(() => {
        console.log('mongoDB is connected...')
        })
        .catch((err) => {
        throw err
        })
        }
const commentSchema = new mongoose.Schema({
    rating: { type: Number, required: [true, 'Rating is required'] },
    comment: { type: String, required: [true, 'Comment is required'], minlength: [3, 'Comment must be at least 3 characters long'] }
})

const cakeSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Baker name cannot be empty'], minlength: [4, 'Name must be 4 characters or longer'] },
    url: { type: String, required: [true, 'url cannot be empty'] },
    data: [commentSchema]
}, { timestamps: true })

const Cake = mongoose.model('cakes', cakeSchema);


app.get('/cakes', (req, res) => {
    Cake.find({}, (err, data) => {
        if (err) {
            console.log('Encountered error getting all the cakes');
            res.json(err);
        }
        else {
            console.log('Successfully fetched all cakes -> ', data);
            res.json(data);
        }
    })
})

app.get('/oneCake/:id', (req, res) => {
    Cake.findById({_id: req.params.id}, (err, data) => {
        if (err) {
            console.log('Encountered error getting the one cake');
            res.json(err);
        }
        else {
            console.log('Successfully fetching one cake-> ', data);
            res.json(data);
        }
    })
})


app.post('/newCake', (req, res) => {
    Cake.create(req.body, (err, data) => {
        if (err) {
            console.log('Encountered error submitting new cake');
            res.json(err);
        }
        else {
            console.log(`Successfully added new cake -> ${data}`);
            res.json(data);
        }
    })
})


app.put('/addRating', (req, res) => {
    console.log(`New data to push --> ${req.body}`)
    Cake.updateOne({_id: req.body.id}, {$push: {data: req.body.rating}}, (err, data) => {
        if (err) {
            console.log('Encountered error adding new comment');
            res.json(err);
        }
        else {
            console.log(`Successfully added a new comment -> ${data}`);
            res.json(data);
        }
    })
})
