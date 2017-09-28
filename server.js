const express = require('express');
const app = express();
const path = require('path');
const Twit = require('twit');
const config = require('./config.js')

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(express.static(__dirname + '/public'));

const Twitter = new Twit(config);
app.get('/statuses/user_timeline', function (req, res) {
  const params = req.query;
  Twitter.get('statuses/user_timeline', params, (err, data, response) => {
    res.send(data);
  })
})

app.listen(3000, function () {
  console.log('Twitter Markov App listening on port 3000...')
})
