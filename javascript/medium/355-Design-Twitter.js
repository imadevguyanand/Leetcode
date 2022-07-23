class Twitter {
  constructor() {
    this.userTable = {}
    this.followersTable = {}
    this.count = 0
    this.maxTweets = 10
  }

  /**
   *
   * @param {number} userId
   * @param {number} tweetId
   * @return {void}
   * @complexites Time => O(1) | Space => O(n) where n is the number of users
   * @description HashTable
   */
  postTweet(userId, tweetId) {
    if (!(userId in this.userTable)) {
      this.userTable[userId] = [[tweetId, this.count++]]
    } else {
      this.userTable[userId].push([tweetId, this.count++])
    }

    this.follow(userId, userId)
    return
  }

  /**
   *
   * @param {number} userId
   * @return {number[]}
   * @complexities Time => O(n * 10) where n is the number of followers with 10 tweets at max
   */
  getNewsFeed(userId) {
    // Get the followers for the user ID
    let followers = this.getFollowersByUserId(userId)
    let tweets = []
    for (const follower of followers) {
      if (follower in this.userTable) {
        // Get all the tweets for every follower
        for (const tweet of Object.values(this.userTable[follower])) {
          tweets.push(tweet)
        }
      }
    }
    const result = []
    if (tweets.length > 0) {
      tweets.sort((a, b) => b[1] - a[1])
      let count = 0
      while (count < this.maxTweets && count < tweets.length) {
        result.push(tweets[count][0])
        count++
      }
    }
    return result
  }

  /**
   *
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId, followeeId) {
    if (!(followerId in this.followersTable)) {
      this.followersTable[followerId] = [[followeeId, true]]
    } else {
      let followeeExists = this.doesFolloweeExist(followerId, followeeId)
      if (!followeeExists) {
        this.followersTable[followerId].push([followeeId, true])
      }
    }

    return
  }

  /**
   *
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId, followeeId) {
    if (!(followerId in this.followersTable)) {
      return
    } else {
      this.updateFollowerTable(this.followersTable[followerId], followeeId)
    }

    return
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {boolean}
   */
  doesFolloweeExist(followerId, followeeId) {
    for (const followees of Object.values(this.followersTable[followerId])) {
      if (followees[0] === followeeId) {
        return true
      }
    }
    return false
  }

  updateFollowerTable(hashTable, followeId) {
    for (const followes of hashTable) {
      if (followes[0] === followeId) {
        followes[1] = false
      }
    }
  }

  getFollowersByUserId(userId) {
    const followers = []
    if (userId in this.followersTable) {
      for (const follower of this.followersTable[userId]) {
        if (follower[1] === true) {
          followers.push(follower[0])
        }
      }
    }

    return followers
  }
}

// let twitter = new Twitter()
// twitter.postTweet(1, 1)
// twitter.postTweet(2, 2)
// twitter.postTweet(3, 3)
// twitter.postTweet(4, 4)
// twitter.postTweet(4, 5)
// twitter.postTweet(4, 6)
// twitter.postTweet(4, 7)
// twitter.postTweet(4, 8)
// twitter.postTweet(4, 9)
// twitter.postTweet(4, 10)
// twitter.postTweet(4, 11)
// twitter.postTweet(4, 10000)
// twitter.follow(1, 2)
// twitter.follow(1, 3)
// twitter.follow(1, 4)
// twitter.unfollow(1, 4)
// console.log(twitter.getNewsFeed(1))

// let twitter = new Twitter()
// console.log(twitter)
// console.log(twitter.postTweet(1, 5))
// console.log(twitter.getNewsFeed(1))
// console.log(twitter.follow(1, 2))
// console.log(twitter.postTweet(2, 6))
// console.log(twitter.getNewsFeed(1))
// console.log(twitter.unfollow(1, 2))
// console.log(twitter.getNewsFeed(1))

// let twitter = new Twitter()
// console.log(twitter)
// console.log(twitter.postTweet(1, 1))
// console.log(twitter.getNewsFeed(1))
// console.log(twitter.follow(2, 1))
// console.log(twitter.getNewsFeed(2))
// console.log(twitter.unfollow(2, 1))
// console.log(twitter.getNewsFeed(2))

let twitter = new Twitter()
console.log(twitter)
console.log(twitter.follow(1, 5))
console.log(twitter.getNewsFeed(1))
