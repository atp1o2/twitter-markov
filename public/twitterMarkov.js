class TwitterMarkov {
  constructor (screen_name, tweets) {
    this.screen_name = screen_name;
    this.tweets = tweets;
    this.tweetChains = {};
    this.tweet_id = 0;
    this.startWords = [];
    this.endWords = [];
    this.wordStats = {};

    if (!this.tweets) {
      throw new Error("No Tweets found.");
    }

    this.tweets.forEach((tweet, i) => {
      let words = tweet.split(' ');
      let lastWord = words[words.length - 1].toLowerCase();
      let firstWord = words[0].toLowerCase();

      // populate startWords
      if (firstWord.length && !checkElementInArray(firstWord, this.startWords)) {
        this.startWords.push(firstWord);
      }

      // populate endWords
      if (lastWord.length && !checkElementInArray(lastWord, this.endWords)) {
        this.endWords.push(lastWord);
      }

      // populate wordStats with nextWords
      words.forEach((str, i, arr) => {
        var word = str.toLowerCase();
        if (arr[i + 1]) {
          var nextWord = arr[i + 1].toLowerCase();
          if (this.wordStats.hasOwnProperty(word)) {
            this.wordStats[word].push(nextWord);
          } else {
            this.wordStats[word] = [nextWord];
          };
        }
      });
    })
  }

  generateMarkovTweet () {
    let word = randomArrayElement(this.startWords);
    let markovChain = word;

    while (markovChain.length <= 130 && this.wordStats.hasOwnProperty(word)) {
      let nextWords = this.wordStats[word];
      word = randomArrayElement(nextWords);
      markovChain += ` ${word}`;
    }
    // append random endWord
    markovChain + ` ${randomArrayElement(this.endWords)}`;

    // save to sessionStorage
    this.tweet_id++
    this.tweetChains[this.tweet_id] = markovChain;
    sessionStorage.setItem(this.screen_name, JSON.stringify(this.tweetChains));

    return markovChain;
  }
}
