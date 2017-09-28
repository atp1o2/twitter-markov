const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Twitter Markov App listening on port 3000...')
})
