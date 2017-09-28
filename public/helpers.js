const parseTweets = (statusesArr) => {
  var tweets = [];
  statusesArr.forEach((status) => {
    tweets.push(status.text);
  })
  return tweets;
};


const appendText = (text) => {
  // append tweet to target div on html
}
