var tweeters = {};

const getUserTweets = (query, callback) => {
  var data = {
    screen_name: query.screen_name,
    exclude_replies: true,
    count: 50,
  };
  $.ajax({
    url: "http://localhost:3000/statuses/user_timeline",
    method: "GET",
    data: data,
  })
  .done((response) => {
    var tweets = parseTweets(response);
    // console.log(data.screen_name, tweets);
    callback(data.screen_name, tweets);
  })
  .fail((error) => {
    console.log("Error: ", error);
  })
};

const handleGetTweetsButton = (e) => {
  var query = {};
  $.each($("#twitterUsernameForm").serializeArray(), (i, field) => {
    query[field.name] = field.value;
  })


  getUserTweets(query, (screen_name, tweets) => {
    var user1 = new TwitterMarkov(screen_name, tweets);
    user1.generateMarkovTweet();
    // use appendText helper method
  });
}

