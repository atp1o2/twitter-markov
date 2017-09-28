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
    // callback(response);
    console.log(response);
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
  getUserTweets(query);
}
