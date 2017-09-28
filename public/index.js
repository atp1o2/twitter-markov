class StateManager {
  constructor () {
    this.twitterUser = {};
    this.markovInstance = null;
  }

  getUserTweets (query, callback) {
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
      callback(data.screen_name, tweets);
    })
    .fail((error) => {
      console.log("Error: ", error);
    })
  }

  handleGetTweetsButton (e) {
    $.each($("#twitterUsernameForm").serializeArray(), (i, field) => {
      this.twitterUser[field.name] = field.value;
    })

    // Prevents repeated api calls for the same user
    if (this.markovInstance && this.markovInstance.screen_name === this.twitterUser.screen_name) {
      appendTweet(this.twitterUser.screen_name, this.markovInstance.generateMarkovTweet());
    } else {
      this.getUserTweets(this.twitterUser, (screen_name, tweets) => {
        this.markovInstance = new TwitterMarkov(screen_name, tweets);
        appendTweet(screen_name, this.markovInstance.generateMarkovTweet());
      });
    }
  }
}

var stateManager = new StateManager();
