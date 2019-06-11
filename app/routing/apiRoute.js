var friends = require('./../data/friends')
var findMatch = require('../data/findMatch')


module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    return res.json(friends)
  })

  app.post('/api/friends', function(req, res) {
    let newFriend = req.body;
    res.json(findMatch(newFriend.scores))
    // console.log(match)
    // return match
    friends.push(newFriend);
  })
}