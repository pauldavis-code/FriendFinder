var friends = require('./friends')
var modal = require('./modalPopulate')

module.exports = function(yourSurvey) {
  //array of results
  let results = []
  let compare = []
  for (let i = 0; i < friends.length; i++) {
    let otherSurveys = friends[i].scores;
    // console.log('Other Surveys: ' + otherSurveys)
    // console.log('Your Survey: ' + yourSurvey)
    for (let j = 0; j < 10; j++) {
      let difference = Math.abs(otherSurveys[j] - yourSurvey[j])
      compare.push(difference)
    }
    // console.log('compare: ' + compare)
    results.push(compare.reduce(function(a, b){return a + b}, 0))
    compare = []
    // console.log('results: ' + results)
  }
  // console.log('Match: ' + Math.min.apply(null, results))
  let matchIndex = results.indexOf(Math.min.apply(null, results))
  return friends[matchIndex]
  
}