const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static( __dirname + '/public/dist/public' ));

app.get('/', (req, res) => {
    res.render('index.html');
})

app.listen(9000, function() {
    console.log("listening on port 9000");
});