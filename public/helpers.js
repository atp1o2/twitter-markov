const parseTweets = (statusesArr) => {
  var tweets = [];
  statusesArr.forEach((status) => {
    tweets.push(status.text);
  })
  return tweets;
};

const appendTweet = (handle, text) => {
  $("#newTweet").text(text);
  $("#twitterHandle").text(handle);
};

const checkElementInArray = (element, arr) => {
  return arr.indexOf(element) !== -1;
};

const randomArrayElement = (arr) => {
  return arr[Math.floor(arr.length * Math.random())];
};
