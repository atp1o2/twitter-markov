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
This is a Markov Chain Tweet Generator that will take the last 100 tweets of a user and generate a new Tweet based on their texting style.

It uses the [twit](https://github.com/ttezel/twit) dependency to authenticate endpoint requests to the Twitter API.
Twitter API doesn't support client request, so an express server was made to handle the API calls.
An AJAX call is made to the express server which sequentially calls on the Twitter endpoint

When the response comes back, the tweets are parsed and ran through the TwitterMarkov class to sort the vocabulary used.

generateMarkovTweet() then creates a tweet based on the user's speech style!

## Stretch Considerations / Blockers / Wins
- Wanted to maintain separate users when a MarkovTwitter instance is created. Due to time burning out, decided to just override the instance each time
- StateManager class created to track if the twitter user was unique. This was to avoid making repeat api calls for the same user and instead just generate a Markov tweet based on the vocab library already instantiated.
  - I feel like there's a better way to do this...using a framework makes handling state more intuitive
- Blocker: Figuring out the best way to manage a new twitter user state
- Win: Engineered my first Markov Chain. Feels good

## Bonus
Open chrome developer tools and type in `sessionStorage` to see stored Markov Tweets

## Misc
Initial Markov Chain Pseudocode (Final Version Changed)
  iterate through list of tweets
  split each tweet into words
  create a counter hash map of first and last words of each tweet
  Fill out wordStats with the 'nextWord'
    Iterate through a tweet sentence
    If wordStats already contains the word, push the next word
    Else set that next word as a wordStat property
    Result should be hash of "piloteWord"s with an Array of commonly used nextWords
  delete spaces and random characters from all hash maps

  generating a chain
  Loop - While wordStats has the word as a property and under 140 characters
    Grab a random startWord and start the chain with it
    Find the startWord in wordStats
    get a random word from wordStats[startWord] and append
    break when min length is reached
  Add a random last word and Join the chain
