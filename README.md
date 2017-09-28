# twitter-markov


Markov Chain Pseudocode
  iterate through list of tweets
  split each tweet into words
  create a counter hash map of first and last words of each tweet
  Fill out wordStats with the 'nextWord'
    Iterate through a tweet sentence
    If wordStats already contains the word, push the next word
    Else set wordStats[word] = [indexOf(word) + 1] *an array of nextWords*
  delete spaces from all hash maps

  generating a chain
  Loop - While wordStats has the word as a property
    Grab a random startWord and set to array[0]
    Find the startWord in wordStats
    get a random word from wordStats[word] 'nextWord' array
    break when min length is reached
  Add a random last word and Join the chain
