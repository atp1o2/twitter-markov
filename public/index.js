const getUserTweets = (screen_name, callback) => {
  var data = {
    screen_name: screen_name,
    exclude_replies: true,
    count: 50,
  };
  $.ajax({
    url: "http://localhost:3000/statuses/user_timeline",
    method: "GET",
    data: data,
  })
  .done((response) => {
    // callback(response);
    console.log(response);
  })
  .fail((error) => {
    console.log("Error: ", error);
  })
};

// getUserTweets("barackobama");
