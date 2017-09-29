# twitter-markov

## Setup
```
$ git clone repository
$ npm install
$ node server.js
```
Visit
```
http://localhost:3000/
```

## Overview
Markov Chain Tweet Generator that takes the last 100 tweets of a user and generates a new Tweet based on their texting style.

It uses the [twit](https://github.com/ttezel/twit) dependency to authenticate endpoint requests to the Twitter API.

When the response comes back, the tweets are parsed and ran through the TwitterMarkov class to sort the vocabulary used.

generateMarkovTweet() then creates a tweet based on the user's speech style!

## Considerations
- Wanted to maintain separate users when a MarkovTwitter instance is created. Due to time burning out, decided to just override the instance each time
- Blocker: Figuring out the best way to manage a new twitter user state
  - StateManager class created to track if the twitter user was unique. This was to avoid making repeat api calls for the same user and instead just generate a Markov tweet based on the vocab library already instantiated.
  - I feel like there's a better way to do this...using a framework makes handling state more intuitive
- Win: Made my first Markov Chain

## Bonus
Open chrome developer tools and type in `sessionStorage` to see stored Markov Tweets
