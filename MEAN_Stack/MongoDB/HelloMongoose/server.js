const mongoose = require('mongoose');
const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
app.listen(9000, function() {
    console.log("listening on port 9000");
   });

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

mongoose.connect('mongodb://localhost/users_db', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
   })
   // create an object to that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);
   
app.get('/', (req, res) => {
    User.find()
        .then(data => res.render("index", {users: data}))
        .catch(err => res.json(err));
});
app.post("/users", (req, res) => {
    const user = new User();
    console.log(req.body)
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
      .then(newUserData => console.log('user created: ', newUserData))
      .catch(err => console.log(err));
     
    res.redirect('/');
 })